/**
 * Created by mark on 12/25/13.
 */
'use strict';

var config = require('../config/config.js').config;
var connection = require('./connection');
var mongoose = require('mongoose');

var arduinoHomeMongooseConnection = mongoose.createConnection(
    connection.getConnectionString(config.arduinoHomeDatabase)
);
arduinoHomeMongooseConnection.on('error', console.error.bind(console, 'DB connection error:'));
arduinoHomeMongooseConnection.once('open', function callback() {
    console.log('Connected to ' + connection.getConnectionString(config.arduinoHomeDatabase));
});

module.exports = exports = arduinoHomeMongooseConnection;