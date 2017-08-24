import React from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'react-d3-basic';

var generalChartData = [
      {
        month: '2001M01',
        total: '770095',
        incineration: '295355',
        garbageBury: '339023',
        largeGarbageRecycle: '0',
        foodWaste: '0',
        recycle: '75630',
        other: '60087',
        average: '1.124'
      },
      {
        month: '2001M02',
        total: '629350',
        incineration: '248283',
        garbageBury: '256351',
        largeGarbageRecycle: '0',
        foodWaste: '0',
        recycle: '74732',
        other: '49983',
        average: '1.016'
      }
];

console.log(generalChartData);

var parseDate = d3.time.format("%YM%m").parse;

var width = 500,
height = 300,
margins = {left: 100, right: 100, top: 50, bottom: 50},
// chart series,
// field: is what field your data want to be selected
// name: the name of the field that display in legend
// color: what color is the line
chartSeries = [
  {
    field: 'total',
    name: 'Total',
    color: '#ff7f0e'
  },
  {
    field: 'incineration',
    name: 'Incineration'
  }
],
// your x accessor
x = function(d) {
  return parseDate(d.month);
},
xScale = 'time';

class Line extends React.Component{
    render() {
         return (
            <LineChart
              margins= {margins}
              data={generalChartData}
              width={width}
              height={height}
              chartSeries={chartSeries}
              x={x}
              xScale={xScale}
            />
            )
        }
    }

export default Line;