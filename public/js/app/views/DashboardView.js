/**
 * Created by mark on 12/24/13.
 */
define(['jquery', 'backbone', 'models/DashboardModel', 'text!templates/Dashboard.html'],

    function($, Backbone, DashboardModel, dashboardTemplate){

        return Backbone.View.extend({

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

                return this;

            }

        });

    }

);