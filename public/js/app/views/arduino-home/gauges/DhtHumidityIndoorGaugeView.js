/**
 * Created by mark on 12/29/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/gauges/HumidityGaugeView',
    'models/arduino-home/gauges/DhtHumidityIndoorGaugeModel'
],
    function(
        $,
        Backbone,
        _,
        HumidityGaugeView,
        DhtHumidityIndoorGaugeModel
        ) {
        'use strict';

        return HumidityGaugeView.extend({

            initialize: function() {

                this.model = new DhtHumidityIndoorGaugeModel();

                this.render();

                this.bindEvents();
            },

            render: function() {
                this.renderGauge({
                    title: 'Indoor Humidity'
                });

                return this;
            }

        });
    }
);