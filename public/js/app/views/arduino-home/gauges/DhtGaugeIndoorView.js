/**
 * Created by mark on 12/26/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/gauges/TemperatureFGaugeView',
    'models/arduino-home/gauges/DhtGaugeIndoorModel'
],
    function(
        $,
        Backbone,
        _,
        TemperatureFGaugeView,
        DhtGaugeIndoorModel
        ) {
        'use strict';

        return TemperatureFGaugeView.extend({

            initialize: function() {

                this.model = new DhtGaugeIndoorModel();

                this.render();

                this.bindEvents();
            },

            render: function() {
                this.renderGauge({
                    gaugeName: 'Indoor Temperature'
                });

                return this;
            }

        });
    }
);