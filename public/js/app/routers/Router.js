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
                'arduino-home': 'arduinoHome',
                'arduino-home/:start': 'arduinoHome',
                'arduino-home/:start/:end': 'arduinoHome'
            },

            dashboard: function() {
                new DashboardView();
                this.setNavBarItemActive('dashboard');
            },

            arduinoHome: function(start, end) {
                new ArduinoHomeView({
                    start: start,
                    end: end
                });
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