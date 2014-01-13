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

            initialize: function(options) {
                if (!options) { options = {}; }
                this.start = options.start ? moment(options.start) : moment().startOf('day').subtract('days', 1);
                this.end = options.end ? moment(options.end) : moment().endOf('day');

                this.render();
            },

            render: function() {

                this.template = _.template(ArduinoHomeTemplate, {});

                this.$el.html(this.template);

                this.dateRangePicker = new DateRangePickerView({
                    el: '#arduino-home-date-range-picker'
                });
                this.dateRangePicker.update(this.start, this.end);
                this.listenTo(Notifier, 'dateRangePickerUpdated', function(start, end) {
                    window.App.navigate('arduino-home/' +
                        encodeURIComponent(moment(start).format()) + '/' +
                        encodeURIComponent(moment(end).format()));
                });

                this.dhtTemperatureMultiSeriesLineChartView =
                    new DhtTemperatureMultiSeriesLineChartView({
                        el: '#dht-temperature-multi-series-line-chart',
                        start: this.start,
                        end: this.end
                    }
                );
                this.dhtTemperatureMultiSeriesLineChartView.fetch();

                this.bmp180BarometricPressureLineChartView =
                    new Bmp180BarometricPressureLineChartView({
                        el: '#bmp180-barometric-pressure-line-chart',
                        start: this.start,
                        end: this.end
                    }
                );
                this.bmp180BarometricPressureLineChartView.fetch();

                this.dhtHumidityMultiSeriesLineChartView = new DhtHumidityMultiSeriesLineChartView({
                    el: '#dht-humidity-multi-series-line-chart',
                    start: this.start,
                    end: this.end
                });
                this.dhtHumidityMultiSeriesLineChartView.fetch();

                this.cd5LightIntensityMultiSeriesLineChartView =
                    new Cd5LightIntensityMultiSeriesLineChartView({
                        el: '#cd5-light-intensity-multi-series-line-chart',
                        start: this.start,
                        end: this.end
                    }
                );
                this.cd5LightIntensityMultiSeriesLineChartView.fetch();

                return this;
            }

        });

    }

);