/**
 * Created by mark on 12/25/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/gauges/TemperatureFGaugeView',
    'models/arduino-home/gauges/DhtGaugeOutdoorDeckModel'
],
    function(
        $,
        Backbone,
        _,
        TemperatureFGaugeView,
        DhtGaugeOutdoorDeckModel
    ) {
        'use strict';

        return TemperatureFGaugeView.extend({

            initialize: function() {

                this.model = new DhtGaugeOutdoorDeckModel();

                this.render();

                this.bindEvents();
            },

            render: function() {
                this.renderGauge({
                    title: 'Outdoor Temperature'
                });

                return this;
            }

        });
    }
);