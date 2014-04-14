/**
 * Created by mark on 12/24/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/ZoeView',
    'models/DashboardModel',
    'views/arduino-home/gauges/DhtGaugeOutdoorDeckView',
    'views/arduino-home/gauges/DhtGaugeIndoorView',
    'views/arduino-home/gauges/DhtHumidityOutdoorGaugeView',
//    'views/arduino-home/gauges/DhtHumidityIndoorGaugeView',
    'views/arduino-home/gauges/Cd5LightIntensityOutdoorGaugeView',
    'views/arduino-home/gauges/Cd5LightIntensityIndoorGaugeView',
    'views/arduino-home/gauges/Bmp180BarometricPressureOutdoorGaugeView',
    'text!templates/Dashboard.html'
],

    function(
        $,
        Backbone,
        _,
        ZoeView,
        DashboardModel,
        DhtGaugeOutdoorView,
        DhtGaugeIndoorView,
        DhtHumidityOutdoorGaugeView,
//        DhtHumidityIndoorGaugeView,
        Cd5LightIntensityOutdoorGaugeView,
        Cd5LightIntensityIndoorGaugeView,
        Bmp180BarometricPressureOutdoorGaugeView,
        dashboardTemplate
    ){
        'use strict';

        return ZoeView.extend({

            bindEvents: function() {

            },

            unBindEvents: function() {

            },

            render: function() {

                this.template = _.template(dashboardTemplate, {});

                this.$el.html(this.template);

                this.dhtGaugeOutdoorView = new DhtGaugeOutdoorView({
                    el: '#dht-gauge-outdoor-view'
                });

                this.dhtGaugeIndoorView = new DhtGaugeIndoorView({
                    el: '#dht-gauge-indoor-view'
                });

                this.dhtHumidityOutdoorGaugeView = new DhtHumidityOutdoorGaugeView({
                    el: '#dht-humidity-outdoor-gauge-view'
                });

//                this.dhtHumidityIndoorGaugeView = new DhtHumidityIndoorGaugeView({
//                    el: '#dht-humidity-indoor-gauge-view'
//                });

                this.cd5LightIntensityOutdoorGaugeView = new Cd5LightIntensityOutdoorGaugeView({
                    el: '#cd5-light-intensity-outdoor-gauge-view'
                });

                this.cd5LightIntensityIndoorGaugeView = new Cd5LightIntensityIndoorGaugeView({
                    el: '#cd5-light-intensity-indoor-gauge-view'
                });

                this.bmp180BarometricPressureLineChartView = new Bmp180BarometricPressureOutdoorGaugeView({
                    el: '#bmp180-barometric-pressure-outdoor-gauge-view'
                });

                return this;

            }

        });

    }

);