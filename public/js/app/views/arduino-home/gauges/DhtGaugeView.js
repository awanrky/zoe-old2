/**
 * Created by mark on 12/25/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'gaugejs',
    'views/gauges/TemperatureFGaugeView',
    'models/arduino-home/gauges/DhtGaugeModel'
],
    function(
        $,
        Backbone,
        _,
        Gauge,
        TemperatureFGaugeView,
        DhtGaugeModel
    ) {
        'use strict';

        return TemperatureFGaugeView.extend({

            render: function() {
                this.renderGauge({
                    gaugeName: 'Indoor Temperature'
                });

                this.gauge.set(109);

                return this;
            }

        });
    }
);