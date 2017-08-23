import React from 'react';
import ReactDOM from 'react-dom';
import {Chart} from 'react-d3-core';
import {BarChart} from 'react-d3-basic';

class BarChart extends React.Component{
    render() {
         var generalChartData = [
              {letter: "A", frequency: 0.08167},
              {letter: "B", frequency: 0.01492},
              {letter: "C", frequency: 0.02782},
              {letter: "D", frequency: 0.03782},
              {letter: "E", frequency: 0.05782},
              {letter: "F", frequency: 0.07782},
              {letter: "G", frequency: 0.06782},
              {letter: "H", frequency: 0.08782},
              {letter: "I", frequency: 0.05782},
              {letter: "J", frequency: 0.00153}
          ];

        console.log(generalChartData);
        var width = 700,
        height = 400,
        title = "Bar Chart",
        chartSeries = [
          {
            field: 'frequency',
            name: 'Frequency'
          }
        ],
        var x = (d) => {
          return d.letter;
        },
        xScale = 'ordinal',
        xLabel = "Letter",
        yLabel = "Frequency",
        yTicks = [10, "%"];

         return (
            <BarChart
            title= {title}
            data= {generalChartData}
            width= {400}
            height= {300}
            chartSeries = {chartSeries}
            x= {x}
            xLabel= {xLabel}
            xScale= {xScale}
            yTicks= {yTicks}
            yLabel = {yLabel}
          />
            )
        }
    }

export default BarChart;