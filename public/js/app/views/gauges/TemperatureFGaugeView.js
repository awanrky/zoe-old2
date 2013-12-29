/**
 * Created by mark on 12/25/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'events/Notifier',
    'views/gauges/GaugeView'
],
    function(
        $,
        Backbone,
        _,
        Notifier,
        GaugeView
        ) {
        'use strict';

        return GaugeView.extend({

            renderGauge: function(options) {
                this.superRenderGauge(_.extend({
                    units: '°F',
                    minValue: 20,
                    maxValue: 110,
                    majorTicks: ['20', '30', '40', '50', '60', '70', '80', '90', '100', '110'],
                    valueFormat: { int: 2, dec: 1 },
                    highlights: [
                        {from: 20, to: 32, color: '#00f'},
                        {from: 32, to: 50, color: '#f0f'},
                        {from: 50, to: 60, color: '#f07'},
                        {from: 60, to: 80, color: '#f55'},
                        {from: 80, to: 100, color: '#f00'},
                        {from: 100, to: 110, color: '#c00'}
                    ]
                }, options));
                this.gauge.minValue = 0;
                this.gauge.maxValue = 110;
            },

            bindEvents: function() {
                var that = this;

                this.listenTo(this.model, 'change', function() {
                    that.gauge.setValue(that.model.getDegreesFahrenheit());
                });
                this.model.fetch();

                this.listenTo(Notifier, 'onMinute0', function() {
                    that.model.fetch();
                });
            }

        });
    }
);