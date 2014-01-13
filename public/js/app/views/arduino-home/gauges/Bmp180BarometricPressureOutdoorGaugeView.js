/**
 * Created by mark on 1/13/14.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/gauges/Bmp180BarometricPressureGaugeView',
    'models/arduino-home/gauges/Bmp180BarometricPressureOutdoorGaugeModel'
],
    function(
        $,
        Backbone,
        _,
        Bmp180BarometricPressureGaugeView,
        Bmp180BarometricPressureOutdoorGaugeModel
        ) {
        'use strict';

        return Bmp180BarometricPressureGaugeView.extend({

            initialize: function() {

                this.model = new Bmp180BarometricPressureOutdoorGaugeModel();

                this.render();

                this.bindEvents();
            },

            render: function() {
                this.renderGauge({
                    title: 'Barometric Pressure'
                });

                return this;
            }

        });
    }
);