'use strict';

var mongoose =     require('mongoose'),
    connection =    require('../../databases/arduino-home'),
    Schema =     mongoose.Schema;

var bmp180Schema = new Schema({
    sensorType: { type: String, default: 'invalid' },
    sensorName: { type: String, default: 'invalid' },
    datetime: { type: Date, default: null },
    data: { type: String, default: null },
    hectoPascals: { type: Number, default: null },
    degreesCelcius: { type: Number, default: null }
});

bmp180Schema.index({datetime: 1, type: -1});

var schemaModel = connection.model('bmp180SchemaModel', bmp180Schema);
module.exports = schemaModel;