define(['jquery', 'backbone', 'underscore'],

    function ($, Backbone, _) {
        'use strict';

        var Notifier = _.extend({

            tick: (function() {
                var minuteTickNumber = 0;

                function incrementMinuteTickNumber() {
                    minuteTickNumber = minuteTickNumber + 1;
                    if(minuteTickNumber > 3) { minuteTickNumber = 0; }
                }

                return function() {
                    Notifier.trigger('onMinute' + minuteTickNumber);

                    incrementMinuteTickNumber();
                };
            }())

        }, Backbone.Events);

        setInterval(Notifier.tick, 60000 / 4);

        return Notifier;

    }
);
