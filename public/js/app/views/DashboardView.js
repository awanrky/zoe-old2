/**
 * Created by mark on 12/24/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/ZoeView',
    'models/DashboardModel',
    'text!templates/Dashboard.html'
],

    function(
        $,
        Backbone,
        _,
        ZoeView,
        DashboardModel,
        dashboardTemplate
    ){
        'use strict';

        return ZoeView.extend({

            el: '.magic',

            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            events: {

            },

            render: function() {

                this.template = _.template(dashboardTemplate, {});

                this.$el.html(this.template);

                this.setNavBarItemActive();

                return this;

            }

        });

    }

);