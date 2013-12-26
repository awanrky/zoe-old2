/**
 * Created by mark on 12/24/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/ZoeView',
    'models/DashboardModel',
    'views/arduino-home/gauges/DhtGaugeView',
    'text!templates/Dashboard.html'
],

    function(
        $,
        Backbone,
        _,
        ZoeView,
        DashboardModel,
        DhtGaugeView,
        dashboardTemplate
    ){
        'use strict';

        return ZoeView.extend({

//            el: '.magic',

//            initialize: function() {
//
//                this.render();
//
//            },

            events: {

            },

            render: function() {

                this.template = _.template(dashboardTemplate, {});

                this.$el.html(this.template);
                this.dhtGaugeView = new DhtGaugeView({
                    el: '#dht-gauge-view'
                });


                return this;

            }

        });

    }

);