/**
 * Created by mark on 12/25/13.
 */
'use strict';

module.exports = exports = {
    getConnectionString: function(config) {
        return 'mongodb://' +
            config.IP +
            ':' +
            config.port +
            '/' +
            config.name;
    }
}