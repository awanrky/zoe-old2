/**
 * Created by mark on 12/29/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'bootstrap-daterangepicker',
    'events/Notifier',
    'text!templates/controls/DateRangePicker.html',
    'moment'
],
    function(
        $,
        Backbone,
        _,
        bootstrapDateRangePicker,
        Notifier,
        template,
        moment
    ){
        'use strict';

        function format(start, end) {
            if (!start) { return ' -- '; }
            var returnValue =  start.format('MMMM D, YYYY HH:mm');
            if (!end) { return returnValue + ' - Now'; }
            return returnValue + ' - ' + end.format('MMMM D, YYYY HH:mm');
        }

        return Backbone.View.extend({

            initialize: function(options) {
                this.elementId = options.elementId;
            },

            update: function(start, end) {
                this.$el.children('div').children('span').html(format(start, end));
                return this;
            },

            render: function(options) {
                return this.superRender(options);
            },

            triggerUpdatedEvent: function(start, end) {
                Notifier.trigger('dateRangePickerUpdated', start, end);
            },

            superRender: function(options) {
                var that = this;

                this.template = _.template(template, {});

                this.$el.html(this.template);

                this.$el.daterangepicker(_.extend({
                    ranges: {
                        'Today': [moment().startOf('day')],
                        'Yesterday and Today': [
                            moment().startOf('day').subtract('days', 1)
                        ],
                        'Last 3 Days': [
                            moment().startOf('day').subtract('days', 2),
                            moment().endOf('day')
                        ],
                        'Last 7 Days': [
                            moment().startOf('day').subtract('days', 6),
                            moment().endOf('day')
                        ],
                        'Last 30 Days': [
                            moment().startOf('day').subtract('days', 29),
                            moment().endOf('day')
                        ],
                        'This Month': [
                            moment().startOf('month'),
                            moment().endOf('month')
                        ],
                        'Last Month': [
                            moment().subtract('month', 1).startOf('month'),
                            moment().subtract('month', 1).endOf('month')
                        ]
                    },
                    startDate: moment().subtract('days', 29),
                    endDate: moment(),
                    timePicker: true,
                    timePickerIncrement: 30,
                    format: 'MM/DD/YYYY h:mm A'
                }, options),
                function(start, end) {
                    that.start = start;
                    that.end = end;

                    that.update(start, end);
                    that.triggerUpdatedEvent(start, end);
                });

                return this;
            }
        });
    }
);