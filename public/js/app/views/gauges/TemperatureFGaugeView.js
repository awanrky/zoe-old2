/**
 * Created by mark on 12/25/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'gaugejs',
    'text!templates/gauges/Gauge.html'
],
    function(
        $,
        Backbone,
        _,
        Gauge,
        GaugeTemplate
        ) {
        'use strict';

        return Backbone.View.extend({

            initialize: function() {
                this.render();
            },

            renderGauge: function(options) {
                this.template = _.template(GaugeTemplate, {
                    gaugeName: options.gaugeName
                });

                this.$el.html(this.template);

                this.gauge = new Gauge(this.$el.children('div').children('canvas')[0])
                    .setOptions(_.extend({
                        lines: 12,
                        angle: 0.15,
                        lineWidth: 0.44,
                        pointer: {
                            length: 0.56,
                            strokeWidth: 0.031,
                            color: '#000000'
                        },
                        limitMax: false,
                        colorStart: '#6FADCF',
                        colorStop: '#8FC0DA',
                        strokeColor: '#E0E0E0',
                        generateGradient: true
                    }, options));
                this.gauge.minValue = 0;
                this.gauge.maxValue = 110;
                this.gauge.animationSpeed = 66;
                this.gauge.setTextField(this.$el
                    .children('div')
                    .children('div')
                    .children('.gauge-text')[0]);
//                this.gauge.set(33);

                return this;
            }

        });
    }
);