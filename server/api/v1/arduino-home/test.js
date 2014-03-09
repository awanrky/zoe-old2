/**
 * Created by mark on 3/9/14.
 */
'use strict';

var Route = require('./../route');
var schema = require('./../schemas/arduino-home/test');

var route = new Route('arduino-home/test');

module.exports.api = function(server) {

    server.get(route.getPath('id/:id'), function(req, res) {
        schema.findById(req.params.id, function(err, docs) {
            if (err) { res.send(400, {error: err.message}); return; }
            res.send(docs);
        });
    });

    server.post(route.getPath(), function(req, res) {
        var data = req.body;

        new schema({
            sensorType: 'test',
            datetime: data.datetime || new Date(),
            sensorName: 'test',
            data: data.data
        }).save(function(error) {
            if (error) {
                res.send(500, {error: error.message});
                return;
            }
            res.send(201);
        });
    });
};