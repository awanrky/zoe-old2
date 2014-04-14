/**
 * Created by mark on 4/13/14.
 */
'use strict';

var Route = require('./../route');
var bmp180Schema = require('../../../schemas/arduino-home/bmp180');
var dhtSchema = require('../../../schemas/arduino-home/dht');

var route = new Route('arduino-home/temperature');

module.exports.api = function(server) {

    function getDaterange(req, res) {
        var startDate = new Date(req.params.start);
        var endDate = (!!req.params.end) ? new Date(req.params.end) : new Date();

        bmp180Schema
            .find({datetime: {$gt: startDate}})
            .find({datetime: {$lt: endDate}})
            .select('sensorName datetime degreesCelcius')
            .exec(function(bmpError, bmpDocuments) {
                if (bmpError) { res.send(400, {bmpError: bmpError.message}); return; }
//                res.send(documents);

                dhtSchema
                    .find({datetime: {$gt: startDate}})
                    .find({datetime: {$lt: endDate}})
                    .select('sensorName datetime degreesCelcius')
                    .exec(function(dhtError, dhtDocuments) {
                        if (dhtError) { res.send(400, {error: dhtError.message}); return; }
                        res.send(bmpDocuments.concat(dhtDocuments));
                    });
            });
    }

    server.get(route.getPath('daterange/:start'), getDaterange);
    server.get(route.getPath('daterange/:start/:end'), getDaterange);

    server.get(route.getPath('last/:sensorName/:count'), function(req, res) {
        bmp180Schema
            .find({sensorName: req.params.sensorName})
            .sort({datetime: -1})
            .limit(req.params.count)
            .exec(function(bmpError, bmpDocuments) {
                if(bmpError) {
                    res.send(400, {error: bmpError.message});
                    return;
                }
//                res.send(documents);
                dhtSchema
                    .find({sensorName: req.params.sensorName})
                    .sort({datetime: -1})
                    .limit(req.params.count)
                    .exec(function(dhtError, dhtDocuments) {
                        if (dhtError) {
                            res.send(400, {error: dhtError.message});
                            return;
                        }
                        res.send(bmpDocuments.concat(dhtDocuments));
                    });
            }
        );
    });
};