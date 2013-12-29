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
    'views/arduino-home/gauges/DhtHumidityIndoorGaugeView',
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
        DhtHumidityIndoorGaugeView,
        dashboardTemplate
    ){
        'use strict';

        return ZoeView.extend({

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

                this.dhtHumidityIndoorGaugeView = new DhtHumidityIndoorGaugeView({
                    el: '#dht-humidity-indoor-gauge-view'
                });

                return this;

            }

        });

    }

);