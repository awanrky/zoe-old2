/**
 * Created by mark on 12/29/13.
 */
define([
    'jquery',
    'backbone',
    'underscore',
    'views/charts/MultiSeriesLineChartView'
],
    function($, Backbone, _, MultiSeriesLineChartView){
        'use strict';

        var seriesDataDefinition = [{
            name: 'living-room',
            mapValues: function(data) {
                seriesDataDefinition[0].values = _.filter(data, function(d) {
                    return d.sensorName === 'living-room';
                }).map(function(d) {
                        return {
                            date: new Date(d.datetime),
                            value: +degreesFahrenheit(d.degreesCelcius)
                        };
                    });
            }
        }, {
            name: 'outside-deck',
            mapValues: function(data) {
                seriesDataDefinition[1].values = _.filter(data, function(d) {
                    return d.sensorName === 'outside-deck';
                }).map(function(d) {
                        return {
                            date: new Date(d.datetime),
                            value: +degreesFahrenheit(d.degreesCelcius)
                        };
                    });
            }
        }];

        function degreesFahrenheit(degreesCelcius) {
            return ((degreesCelcius * 9.0 / 5.0) + 32.0).toFixed(2);
        }

        return MultiSeriesLineChartView.extend({

            el: '#dht-temperature-multi-series-line-chart',

            url: 'api/v1/arduino-home/dht',

            path: 'daterange',

            params: '2013-11-21',

            width: 1000,

            height: 250,

            yLabel: 'Temperature',

            series: seriesDataDefinition,

            getYDomain: function() {
                return [30, 100];
            }

        });
    }
);