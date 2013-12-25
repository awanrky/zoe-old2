/**
 * Created by mark on 12/25/13.
 */
'use strict';

var schema = require('../../../schemas/arduino-home/dht');
var Route = require('./../route');

var route = new Route('arduino-home/dht');
var moment = require('moment');

module.exports.api = function(server) {

    server.get(route.getPath('id/:id'), function(req, res){
        schema.findById(req.params.id, function(err, docs){
            if (err) { res.send(400, {error: err.message}); return; }
            res.send(docs);
        });
    });

    server.get(route.getPath('daterange/:start'), getDaterange);
    server.get(route.getPath('daterange/:start/:end'), getDaterange);

    function getDaterange(req, res) {
        var startDate = new Date(req.params.start);
        var endDate = (!!req.params.end) ? new Date(req.params.end) : new Date();

        schema
            .find({datetime: {$gt: startDate}})
            .find({datetime: {$lt: endDate}})
            .select('sensorName datetime degreesCelcius humidity')
            .exec(function(error, documents) {
                if (error) { res.send(400, {error: error.message}); return; }
                res.send(documents);
            });
    }

    server.get(route.getPath('last/:count'), function(req, res) {
        schema.find().sort({datetime: -1}).limit(req.params.params).exec(function(error, documents) {
            if (error) { res.send(400, {error: error.message}); return; }
            res.send(documents);
        });
    });

    server.get(route.getPath('hourly/:hours'), function(req, res) {
        var startDate = moment().subtract('hours', req.params.hours).toDate();
        var o = {};
        o.map = function () {
            var temp = {
//                _id: this._id,
                degreesCelcius: this.degreesCelcius,
                humidity: this.humidity
            };
            emit(
                this.datetime.toDateString() +
                    ' ' +
                    this.datetime.toTimeString().substr(0, 2) +
                    ':00',
                { min: temp, max: temp } );
        };
        o.reduce = function (key, values) {
            var result = values[0];

            for ( var i = 1; i < values.length; i++ ) {
                if (values[i].min.degreesCelcius < result.min.degreesCelcius) {
                    result.min.degreesCelcius = values[i].min.degreesCelcius;
                }
                if (values[i].max.degreesCelcius > result.max.degreesCelcius) {
                    result.max.degreesCelcius = values[i].max.degreesCelcius;
                }
                if (values[i].min.humidity < result.min.humidity) {
                    result.min.humidity = values[i].min.humidity;
                }
                if (values[i].max.humidity > result.max.humidity) {
                    result.max.humidity = values[i].max.humidity;
                }
            }

            return result;
        };
        o.query = {datetime: {$gt: startDate}};
        schema.mapReduce(o, function(err, results) {
            if (err) { res.send(500, err); return;  }
            res.send(results);
        } );

    });

    server.post(route.getPath(), function(req, res) {
        var dht = new schema({
            humidity: req.body.humidity,
            degreesCelcius: req.body.degreesCelcius,
            date: req.body.date || new Date(),
            sensorName: req.body.sensorName
        });

        dht.save(function(error, newDht) {
            if (error) {
                res.send(500, { error: error.message });
                return;
            }

            res.send(newDht);
        });
    });

};