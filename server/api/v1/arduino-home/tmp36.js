/**
 * Created by mark on 12/25/13.
 */
'use strict';

var Route = require('./../route');
var schema = require('../../../schemas/arduino-home/tmp36');

var route = new Route('arduino-home/tmp36');


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
            .select('sensorName datetime degreesCelcius')
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

    server.post(route.getPath(), function(req, res) {
        var tmp36 = new schema({
            volts: req.body.volts,
            degreesCelcius: req.body.degreesCelcius,
            date: req.body.date || new Date(),
            sensorName: req.body.sensorName
        });

        tmp36.save(function(error, newTmp36) {
            if (error) {
                res.send(500, { error: error.message });
                return;
            }

            res.send(newTmp36);
        });
    });

};