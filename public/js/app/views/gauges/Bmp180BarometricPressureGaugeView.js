/**
 * Created by mark on 1/13/14.
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
                    units: 'hPa',
                    minValue: 950,
                    maxValue: 1050,
                    majorTicks: ['950', '975', '1000', '1025', '1050'],
                    valueFormat: { int: 3, dec: 2 },
                    highlights: [
                        {from: 950, to: 1050, color: '#fff'},
                    ]
                }, options));
                this.gauge.minValue = 950;
                this.gauge.maxValue = 1050;
            },

            bindEvents: function() {
                var that = this;

                this.listenTo(this.model, 'change', function() {
                    that.gauge.setValue(that.model.getReading());
                });
                this.model.fetch();

                this.listenTo(Notifier, 'onMinute2', function() {
                    that.model.fetch();
                });
            }

        });
    }
);