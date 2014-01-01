'use strict';

var Config = require('./config/config.js').config;
var express = require('express'),
    http = require('http'),
    port = ( process.env.PORT || Config.listenPort ),
    server = module.exports = express(),
    mongoose = require('mongoose');

var cd5api = require('./api/v1/arduino-home/cd5'),
    tmp36api = require('./api/v1/arduino-home/tmp36'),
    tsl2561api = require('./api/v1/arduino-home/tsl2561'),
    invalidapi = require('./api/v1/arduino-home/invalid'),
    dhtapi = require('./api/v1/arduino-home/dht');

// DATABASE CONFIGURATION
// ======================

function getDatabaseConnectionString(databaseConfig) {
    return 'mongodb://' + databaseConfig.IP + ':' + databaseConfig.port + '/' + databaseConfig.name;
}

mongoose.connect(
    getDatabaseConnectionString(Config.database)
);
var zoeMongooseConnection = mongoose.connection;
zoeMongooseConnection.on('error', console.error.bind(console, 'DB connection error:'));
zoeMongooseConnection.once('open', function callback() {
    console.log('Connected to ' + getDatabaseConnectionString(Config.database));
});



// SERVER CONFIGURATION
// ====================

server.configure(function () {

    server.use(express['static'](__dirname + '/../public'));

    server.use(express.errorHandler({

        dumpExceptions: true,

        showStack: true

    }));

    server.use(express.bodyParser());

    server.use(express.cookieParser());

    server.use(express.session({ secret: Config.sessionSecret }));

    server.use(server.router);

});

// API
// ===

cd5api.api(server);
dhtapi.api(server);
tmp36api.api(server);
tsl2561api.api(server);
invalidapi.api(server);

// Start Node.js Server
http.createServer(server).listen(port);
console.log('Server started on port: ' + port);

