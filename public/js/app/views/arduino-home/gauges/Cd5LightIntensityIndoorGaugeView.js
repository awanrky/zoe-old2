/**
 * Created by mark on 12/29/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/gauges/Cd5LightIntensityGaugeView',
    'models/arduino-home/gauges/Cd5LightIntensityIndoorGaugeModel'
],
    function(
        $,
        Backbone,
        _,
        Cd5LightIntensityGaugeView,
        Cd5LightIntensityIndoorGaugeModel
        ) {
        'use strict';

        return Cd5LightIntensityGaugeView.extend({

            initialize: function() {

                this.model = new Cd5LightIntensityIndoorGaugeModel();

                this.render();

                this.bindEvents();
            },

            render: function() {
                this.renderGauge({
                    title: 'Indoor Light'
                });

                return this;
            }

        });
    }
);