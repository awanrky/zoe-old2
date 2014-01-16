/**
 * Created by mark on 12/24/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'moment',
    'events/Notifier',
    'views/controls/DateRangePickerView',
    'views/ZoeView',
    'models/ArduinoHomeModel',
    'text!templates/ArduinoHome.html',
    'views/arduino-home/charts/DhtTemperatureMultiSeriesLineChartView',
    'views/arduino-home/charts/DhtHumidityMultiSeriesLineChartView',
    'views/arduino-home/charts/Cd5LightIntensityMultiSeriesLineChartView',
    'views/arduino-home/charts/Bmp180BarometricPressureLineChartView'
],

    function(
        $,
        Backbone,
        _,
        moment,
        Notifier,
        DateRangePickerView,
        ZoeView,
        ArduinoHomeModel,
        ArduinoHomeTemplate,
        DhtTemperatureMultiSeriesLineChartView,
        DhtHumidityMultiSeriesLineChartView,
        Cd5LightIntensityMultiSeriesLineChartView,
        Bmp180BarometricPressureLineChartView
    ){
        'use strict';

        return ZoeView.extend({

            initialize: function() {
                this.listenTo(Notifier, 'dateRangePickerUpdated', function(start, end) {
                    window.App.navigate('arduino-home/' +
                        encodeURIComponent(moment(start).format()) + '/' +
                        encodeURIComponent(moment(end).format()));
                });
            },

            getDateRangePickerView: (function() {
                var view;
                return function() {
                    return view || (view = new DateRangePickerView({
                        elementId: 'arduino-home-date-range-picker'
                    }));
                };
            }()),

            getDhtTemperatureMultiSeriesLineChartView: (function() {
                var view;
                return function() {
                    return view || (view = new DhtTemperatureMultiSeriesLineChartView({
                        elementId: 'dht-temperature-multi-series-line-chart'
                    }));
                };
            }()),

            getBmp180BarometricPressureLineChartView: (function() {
                var view;
                return function() {
                    return view || (view = new Bmp180BarometricPressureLineChartView({
                        elementId: 'bmp180-barometric-pressure-line-chart'
                    }));
                };
            }()),

            getDhtHumidityMultiSeriesLineChartView: (function() {
                var view;
                return function() {
                    return view || (view = new DhtHumidityMultiSeriesLineChartView({
                        elementId: 'dht-humidity-multi-series-line-chart'
                    }));
                };
            }()),

            getCd5LightIntensityMultiSeriesLineChartView: (function() {
                var view;
                return function() {
                    return view || (view = new Cd5LightIntensityMultiSeriesLineChartView({
                        elementId: 'cd5-light-intensity-multi-series-line-chart'
                    }));
                };
            }()),

            assign: function(view) {
                view.setElement(this.$('#' + view.elementId));
                return view;
            },

            render: function(options) {

                if (!options) { options = {}; }
                this.start = options.start ?
                    moment(options.start) :
                    moment().startOf('day').subtract('days', 1);
                this.end = options.end ?
                    moment(options.end) :
                    moment().endOf('day');

                this.template = _.template(ArduinoHomeTemplate, {});

                this.$el.html(this.template);

                this.assign(this.getDateRangePickerView()).render().update(this.start, this.end);

                this.assign(this.getDhtTemperatureMultiSeriesLineChartView()).fetch(this.start, this.end);

                this.assign(this.getBmp180BarometricPressureLineChartView()).fetch(this.start, this.end);

                this.assign(this.getDhtHumidityMultiSeriesLineChartView()).fetch(this.start, this.end);

                this.assign(this.getCd5LightIntensityMultiSeriesLineChartView()).fetch(this.start, this.end);

                return this;
            }

        });

    }

);