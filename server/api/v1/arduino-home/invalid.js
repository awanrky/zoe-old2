/**
 * Created by mark on 12/25/13.
 */
'use strict';

var Route = require('./../route');
var schema = require('../../../schemas/arduino-home/invalid');

var route = new Route('arduino-home/invalid');

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
            .select('datetime data returnedType')
            .exec(function(error, documents) {
                if (error) { res.send(400, {error: error.message}); return; }
                res.send(documents);
            });
    }
    server.get(route.getPath('daterange/:start'), getDaterange);
    server.get(route.getPath('daterange/:start/:end'), getDaterange);

    server.post(route.getPath(), function(req, res) {
        console.log(route.getPath());
        console.log(req.headers);
        console.log(req.body);

        new schema({
            sensorType: 'invalid',
            datetime: req.body.datetime || new Date(),
            data: req.body.data,
            returnedType: req.body.returnedType
        }).save(function(error) {
            if (error) {
                res.send(500, {error: error.message});
            }
            res.send(201);
        });
    });

};