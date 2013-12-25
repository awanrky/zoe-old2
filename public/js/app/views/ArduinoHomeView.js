/**
 * Created by mark on 12/24/13.
 */
define(['jquery', 'backbone', 'models/ArduinoHomeModel', 'text!templates/ArduinoHome.html'],

    function($, Backbone, ArduinoHomeModel, ArduinoHomeTemplate){

        return Backbone.View.extend({

            el: '.magic',

            initialize: function() {
                this.render();
            },

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