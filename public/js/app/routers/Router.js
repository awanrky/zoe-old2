// Router.js

define([
    'jquery',
    'backbone',
    'models/DashboardModel',
    'views/DashboardView',
    'models/ArduinoHomeModel',
    'views/ArduinoHomeView'
],

    function(
        $,
        Backbone,
        DashboardModel,
        DashboardView,
        ArduinoHomeModel,
        ArduinoHomeView
    ) {
        'use strict';

        var router = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            routes: {

                // When there is no hash on the url, the home method is called
                '': 'dashboard',
                'dashboard': 'dashboard',
                'arduinohome': 'arduinoHome'

            },

            dashboard: function() {
                new DashboardView();
                this.setNavBarItemActive('dashboard');
            },

            arduinoHome: function() {
                new ArduinoHomeView();
                this.setNavBarItemActive('arduinohome');
            },

            setNavBarItemActive: function(route) {
                $('#menu li.active').removeClass('active');
                var selector = '#menu a[href=#' + route + ']';
                $(selector).parent().addClass('active');
            }

        });

        return router;

    }

);