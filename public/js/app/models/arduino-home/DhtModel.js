/**
 * Created by mark on 12/26/13.
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

            getDegreesFahrenheit: function() {
                return (this.attributes[0].degreesCelcius * 9.0 / 5.0) + 32.0;
            },

            getHumidity: function() {
                return this.attributes[0].humidity;
            }

        });
    }
);