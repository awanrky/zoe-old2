/**
 * Created by mark on 12/25/13.
 */
define([
    'jquery',
    'backbone',
    'models/arduino-home/DhtModel'
],
    function(
        $,
        Backbone,
        DhtModel
    ) {
        'use strict';


        return DhtModel.extend({

            'url': 'api/v1/arduino-home/dht/last/outside-deck/1'

        });
    }
);