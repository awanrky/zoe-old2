/**
 * Created by mark on 12/24/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'moment',
    'views/controls/DateRangePickerView',
    'views/ZoeView',
    'models/ArduinoHomeModel',
    'text!templates/ArduinoHome.html',
    'views/arduino-home/charts/DhtTemperatureMultiSeriesLineChartView',
    'views/arduino-home/charts/DhtHumidityMultiSeriesLineChartView',
    'views/arduino-home/charts/Cd5LightIntensityMultiSeriesLineChartView'
],

    function(
        $,
        Backbone,
        _,
        moment,
        DateRangePickerView,
        ZoeView,
        ArduinoHomeModel,
        ArduinoHomeTemplate,
        DhtTemperatureMultiSeriesLineChartView,
        DhtHumidityMultiSeriesLineChartView,
        Cd5LightIntensityMultiSeriesLineChartView
    ){
        'use strict';

        return ZoeView.extend({

            render: function() {

                this.template = _.template(ArduinoHomeTemplate, {});

                this.$el.html(this.template);

                this.dateRangePicker = new DateRangePickerView({
                    el: '#arduino-home-date-range-picker'
                });
                this.dateRangePicker.update(moment().startOf('day'));

                this.dhtTemperatureMultiSeriesLineChartView =
                    new DhtTemperatureMultiSeriesLineChartView({
                    el: '#dht-temperature-multi-series-line-chart'
                });
                this.dhtTemperatureMultiSeriesLineChartView.setDateRange(moment().startOf('day'));

                this.dhtHumidityMultiSeriesLineChartView = new DhtHumidityMultiSeriesLineChartView({
                    el: '#dht-humidity-multi-series-line-chart'
                });
                this.dhtHumidityMultiSeriesLineChartView.setDateRange(moment().startOf('day'));

                this.cd5LightIntensityMultiSeriesLineChartView =
                    new Cd5LightIntensityMultiSeriesLineChartView({
                    el: '#cd5-light-intensity-multi-series-line-chart'
                });
                this.cd5LightIntensityMultiSeriesLineChartView
                    .setDateRange(moment().startOf('day'));

                return this;
            }

        });

    }

);