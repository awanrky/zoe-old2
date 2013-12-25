'use strict';
/**
 * Created by mark on 11/16/13.
 */
var mongoose =     require('mongoose'),
    connection =    require('../../databases/arduino-home'),
    Schema =     mongoose.Schema;

var invalidSchema = new Schema({
    sensorType: { type: String, default: 'invalid' },
    data: { type: String, default: null },
    datetime: { type: String, default: null },
    returnedType: { type: String, default: null}
});

invalidSchema.index({datetime: 1, type: -1});
invalidSchema.index({returnedType: 1, type: -1});

var schemaModel = connection.model('invalidSchemaModel', invalidSchema);
module.exports = schemaModel;
