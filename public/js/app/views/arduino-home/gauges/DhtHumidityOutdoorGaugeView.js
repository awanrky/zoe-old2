/**
 * Created by mark on 12/29/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/gauges/HumidityGaugeView',
    'models/arduino-home/gauges/DhtHumidityOutdoorGaugeModel'
],
    function(
        $,
        Backbone,
        _,
        HumidityGaugeView,
        DhtHumidityOutdoorGaugeModel
        ) {
        'use strict';

        return HumidityGaugeView.extend({

            initialize: function() {

                this.model = new DhtHumidityOutdoorGaugeModel();

                this.render();

                this.bindEvents();
            },

            render: function() {
                this.renderGauge({
                    title: 'Outdoor Humidity'
                });

                return this;
            }

        });
    }
);