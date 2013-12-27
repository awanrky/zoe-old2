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
                    colorStart: '#0000FF',
                    colorStop: '#FF0000'
                }, options));
                this.gauge.minValue = 0;
                this.gauge.maxValue = 110;
            },

            bindEvents: function() {
                var that = this;

                this.listenTo(this.model, 'change', function() {
                    that.gauge.set(that.model.getDegreesFahrenheit());
                });
                this.model.fetch();

                this.listenTo(Notifier, 'onMinute0', function() {
                    that.model.fetch();
                });
            }

        });
    }
);