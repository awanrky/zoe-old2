/**
 * Created by mark on 12/24/13.
 */
define(['jquery', 'backbone'],

    function($, Backbone){
        'use strict';

        return Backbone.View.extend({

            el: '.magic',

            initialize: function() {
                this.render();
            }



        });

    }

);