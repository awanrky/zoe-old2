/**
 * Created by mark on 12/25/13.
 */
'use strict';

var _ = require('lodash');
var Route = require('../route');

function V1Route(name) {
    _.assign(this, new Route(name, 'v1'));
}

module.exports = exports = V1Route;