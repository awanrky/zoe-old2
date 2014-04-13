/**
 * Created by mark on 1/13/14.
 */
define([
    'jquery',
    'backbone',
    'models/arduino-home/Bmp180Model'
],
    function(
        $,
        Backbone,
        Bmp180Model
        ) {
        'use strict';

        return Bmp180Model.extend({

            'url': 'api/v1/arduino-home/Bmp180/last/living-room/1'

        });
    }
);