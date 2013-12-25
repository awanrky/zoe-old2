'use strict';

var Config = require('./config/config.js').config;
var express = require('express'),
    http = require('http'),
    port = ( process.env.PORT || Config.listenPort ),
    server = module.exports = express(),
    mongoose = require('mongoose');

var cd5api = require('./api/v1/cd5');

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

// Start Node.js Server
http.createServer(server).listen(port);

