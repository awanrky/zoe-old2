/**
 * Created by mark on 3/9/14.
 */
'use strict';

var mongoose =      require('mongoose'),
    connection =    require('../../databases/arduino-home'),
    Schema =        mongoose.Schema;

var testSchema = new Schema({
    sensorType: { type: String, default: 'invalid' },
    sensorName: { type: String, default: 'invalid' },
    datetime: { type: Date, default: null },
    data: { type: String, default: null }
});

testSchema.index({datetime: 1, type: -1});

var schemaModel = connection.model('testSchemaModel', testSchema);
module.exports = schemaModel;