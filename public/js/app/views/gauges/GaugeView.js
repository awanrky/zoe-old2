/**
 * Created by mark on 12/26/13.
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

            superRenderGauge: function(options) {
                this.template = _.template(GaugeTemplate, {
                    gaugeName: options.gaugeName
                });

                this.$el.html(this.template);

                this.gauge = new Gauge(this.$el.children('div').children('canvas')[0])
                    .setOptions(_.extend({
                        lines: 12,
                        angle: 0.0,
                        lineWidth: 0.44,
//                        colorStart: '#6FADCF',
//                        colorStop: '#8FC0DA',
                        colorStart: '#0000FF',
                        colorStop: '#FF0000',
                        pointer: {
                            length: 0.56,
                            strokeWidth: 0.031,
                            color: '#000000'
                        },
                        limitMax: false,
                        strokeColor: '#E0E0E0',
                        generateGradient: true
                    }, options));
                this.gauge.animationSpeed = 36;
                this.gauge.setTextField(this.$el
                    .children('div')
                    .children('div')
                    .children('.gauge-text')[0]);

                return this;
            }
        })
    })