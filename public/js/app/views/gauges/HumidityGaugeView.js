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
                    units: '%',
                    minValue: 0,
                    maxValue: 100,
                    majorTicks: ['0', '20', '40', '60', '80', '100'],
                    valueFormat: { int: 2, dec: 1 },
                    highlights: [
                        {from: 0, to: 20, color: '#fff'},
                        {from: 20, to: 40, color: '#ccf'},
                        {from: 40, to: 60, color: '#aaf'},
                        {from: 60, to: 80, color: '#44f'},
                        {from: 80, to: 100, color: '#00f'}
                    ]
                }, options));
                this.gauge.minValue = 0;
                this.gauge.maxValue = 110;
            },

            bindEvents: function() {
                var that = this;

                this.listenTo(this.model, 'change', function() {
                    that.gauge.setValue(that.model.getHumidity());
                });
                this.model.fetch();

                this.listenTo(Notifier, 'onMinute1', function() {
                    that.model.fetch();
                });
            }

        });
    }
);