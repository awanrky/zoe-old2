/**
 * Created by mark on 12/25/13.
 */
'use strict';

function Route (name, version) {
    this.version = version || this.version;
    this.name = name;

    this.path = [
        '/api/',
        this.version,
        '/',
        this.name
    ].join('');

    this.getPath = function(parameters) {
        if (!parameters) { return this.path; }

        return [
            this.path,
            '/',
            parameters
        ].join('');
    };
}

module.exports = exports = Route;