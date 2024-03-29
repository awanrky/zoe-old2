'use strict';

var Route = require('./../route');
var schema = require('../../../schemas/arduino-home/cd5');

var route = new Route('arduino-home/cd5');

module.exports.api = function(server) {

    server.get(route.getPath('id/:id'), function(req, res){
        schema.findById(req.params.id, function(err, docs){
            if (err) { res.send(400, {error: err.message}); return; }
            res.send(docs);
        });
    });

    function getDaterange(req, res) {
        var startDate = new Date(req.params.start);
        var endDate = (!!req.params.end) ? new Date(req.params.end) : new Date();

        schema
            .find({datetime: {$gt: startDate}})
            .find({datetime: {$lt: endDate}})
            .select('sensorName datetime reading')
            .exec(function(error, documents) {
                if (error) { res.send(400, {error: error.message}); return; }
                res.send(documents);
            });
    }
    server.get(route.getPath('daterange/:start'), getDaterange);
    server.get(route.getPath('daterange/:start/:end'), getDaterange);

    server.get(route.getPath('last/:sensorName/:count'), function(req, res) {
        schema
            .find({sensorName: req.params.sensorName})
            .sort({datetime: -1})
            .limit(req.params.count)
            .exec(function(error, documents) {
                if (error) {
                    res.send(400, {error: error.message});
                    return;
                }
                res.send(documents);
            }
        );
    });

    server.post(route.getPath(), function(req, res) {

        if (!req.body.reading) {
            res.send(500, JSON.stringify(req.body));
            return;
        }

        new schema({
            sensorType: 'Cd5',
            datetime: req.body.datetime || new Date(),
            sensorName: req.body.sensorName,
//            sensorPin: req.body.sensorPin,
            reading: req.body.reading
        }).save(function(error) {
            if (error) {
                res.send(500, {error: error.message});
            }
            res.send(201);
        });
    });

};