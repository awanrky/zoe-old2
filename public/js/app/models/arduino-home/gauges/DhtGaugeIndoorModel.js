/**
 * Created by mark on 12/26/13.
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

            'url': 'api/v1/arduino-home/temperature/last/living-room/1'

        });
    }
);