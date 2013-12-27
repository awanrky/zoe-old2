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

                return this;

            }

        });

    }

);