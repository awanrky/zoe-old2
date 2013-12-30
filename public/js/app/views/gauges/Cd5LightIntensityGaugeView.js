/**
 * Created by mark on 12/29/13.
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
                    units: 'Intensity',
                    minValue: 0,
                    maxValue: 1000,
                    majorTicks: ['0', '200', '400', '600', '800', '1000'],
                    valueFormat: { int: 3, dec: 0 },
                    highlights: [
                        {from: 0, to: 400, color: '#222'},
                        {from: 400, to: 650, color: '#626'},
                        {from: 650, to: 850, color: '#992'},
                        {from: 850, to: 950, color: '#cc2'},
                        {from: 950, to: 1000, color: '#ff2'}
                    ]
                }, options));
                this.gauge.minValue = 0;
                this.gauge.maxValue = 1000;
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