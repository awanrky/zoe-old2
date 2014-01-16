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

        var unBindEvents = function(){};

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

            getDashboardView: (function() {
                var view;
                return function() {
                    return view || (view = new DashboardView());
                };
            }()),

            getArduinoHomeView: (function() {
                var view;
                return function() {
                    return view || (view = new ArduinoHomeView());
                };
            }()),

            dashboard: function() {
                unBindEvents();
                this.getDashboardView().render();
                unBindEvents = _.bind(this.getDashboardView().unBindEvents, this.getDashboardView());
                this.setNavBarItemActive('dashboard');
            },

            arduinoHome: function(start, end) {
                unBindEvents();
                this.getArduinoHomeView()
                    .render({
                        start: start,
                        end: end
                    })
                    .bindEvents();
                unBindEvents = _.bind(this.getArduinoHomeView().unBindEvents, this.getArduinoHomeView());
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