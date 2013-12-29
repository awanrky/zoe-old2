/**
 * Created by mark on 12/29/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/gauges/Cd5LightIntensityGaugeView',
    'models/arduino-home/gauges/Cd5LightIntensityOutdoorGaugeModel'
],
    function(
        $,
        Backbone,
        _,
        Cd5LightIntensityGaugeView,
        Cd5LightIntensityOutdoorGaugeModel
        ) {
        'use strict';

        return Cd5LightIntensityGaugeView.extend({

            initialize: function() {

                this.model = new Cd5LightIntensityOutdoorGaugeModel();

                this.render();

                this.bindEvents();
            },

            render: function() {
                this.renderGauge({
                    title: 'Outdoor Light'
                });

                return this;
            }

        });
    }
);