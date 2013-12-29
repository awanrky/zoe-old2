/**
 * Created by mark on 12/29/13.
 */
define([
    'jquery',
    'backbone',
    'models/arduino-home/Cd5Model'
],
    function(
        $,
        Backbone,
        Cd5Model
        ) {
        'use strict';

        return Cd5Model.extend({

            'url': 'api/v1/arduino-home/cd5/last/outside-deck/1'

        });
    }
);