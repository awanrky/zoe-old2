/**
 * Created by mark on 1/13/14.
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
            name: 'hPa',
            mapValues: function(data) {
                seriesDataDefinition[0].values = _.map(data, function(d) {
                        return {
                            date: new Date(d.datetime),
                            value: +d.hectoPascals
                        };
                    });
            }
        }
//            , {
//            name: 'C',
//            mapValues: function(data) {
//                seriesDataDefinition[1].values = _.map(data, function(d) {
//                        return {
//                            date: new Date(d.datetime),
//                            value: +d.degreesCelcius
//                        };
//                    });
//            }
//        }
        ];

        return MultiSeriesLineChartView.extend({

            el: '#bmp180-barometric-pressure-line-chart',

            url: 'api/v1/arduino-home/bmp180',

            path: 'daterange',

            params: '2013-11-21',

            width: 1000,

            height: 250,

            yLabel: 'Barometric Pressure (hPa)',

//            getYDomain: function(){return[970, 1000];},

            series: seriesDataDefinition

        });
    }
);