/**
 * Created by mark on 12/24/13.
 */
define(['jquery', 'backbone'],

    function($, Backbone){
        'use strict';

        var ZoeView = Backbone.View.extend({

            el: '.magic',

            initialize: function() {
                this.render();
            }

        });


        return ZoeView;
    }
);