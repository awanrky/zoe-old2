/**
 * Created by mark on 1/13/14.
 */
define([
    'jquery',
    'backbone'
],
    function(
        $,
        Backbone
        ) {
        'use strict';

        return Backbone.Model.extend({

            getReading: function() {
                return this.attributes[0].hectoPascals;
            }

        });
    }
);