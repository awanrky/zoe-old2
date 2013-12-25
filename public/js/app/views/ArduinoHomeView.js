/**
 * Created by mark on 12/24/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/ZoeView',
    'models/ArduinoHomeModel',
    'text!templates/ArduinoHome.html'
],

    function(
        $,
        Backbone,
        _,
        ZoeView,
        ArduinoHomeModel,
        ArduinoHomeTemplate
    ){
        'use strict';

        return ZoeView.extend({

//            el: '.magic',
//
//            initialize: function() {
//                this.render();
//            },

            events: {

            },

            render: function() {

                this.template = _.template(ArduinoHomeTemplate, {});

                this.$el.html(this.template);

                return this;

            }

        });

    }

);