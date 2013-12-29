/**
 * Created by mark on 12/26/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'canvas-gauge',
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
                this.template = _.template(GaugeTemplate, {});

                this.$el.html(this.template);

                this.gauge = new Gauge(_.extend({
                    renderTo: this.$el.children('div').children('canvas')[0],
                    width: 200,
                    height: 200,
                    title: 'title should go here',
                    minValue: 0,
                    maxValue: 100,
                    majorTicks: ['20', '40', '60', '80'],
                    minorTicks: 10,
                    strokeTicks: true,
                    units: 'units',
                    valueFormat: { int: 3, dec: 2 },
                    glow: true,
                    animation: { delay: 10, duration: 400, fn: 'bounce' },
                    colors: {
                        plate: '#fff',
                        majorTicks: '#444',
                        minorTicks: '#666',
                        title: '#000',
                        units: '#000',
                        numbers: '#444',
                        needle: {
                            start: 'rgba(240, 128, 128, 1)',
                            end: 'rgba(255, 160, 122, .9)'
                        }
                    },
                    highlights: [
                        {from: 20, to: 60, color: '#eee'},
                        {from: 60, to: 80, color: '#ccc'},
                        {from: 80, to: 100, color: '#999'}
                    ]
                }, options));

                this.gauge.draw();

                return this;
            }
        });
    });