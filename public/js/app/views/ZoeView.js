/**
 * Created by mark on 12/24/13.
 */
define(['jquery', 'backbone'],

    function($, Backbone){
        'use strict';

        return Backbone.View.extend({


            initialize: function() {
                this.render();
            },

            setNavBarItemActive: function() {
                $('#menu li.active').removeClass('active');
                var selector = '#menu a[href=#' + Backbone.history.fragment + ']';
                $(selector).parent().addClass('active');
            }

        });

    }

);