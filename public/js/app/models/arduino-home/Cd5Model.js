/**
 * Created by mark on 12/29/13.
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
                return this.attributes[0].reading;
            }

        });
    }
);