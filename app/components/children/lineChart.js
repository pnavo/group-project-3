import React from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'react-d3-basic';

class Line extends React.Component{
    render() {
         var generalChartData = [
                {
                  name: "series1",
                  values: [ { x: 0, y: 20 }, { x: 24, y: 10 } ]
                },
                {
                  name: "series2",
                  values: [ { x: 70, y: 82 },{ x: 76, y: 82 } ]
                  }
          ];

        console.log(generalChartData);
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
            }
          ],
          // your x accessor
          x = (d) => {
            return d.name;
          }

         return (
            <LineChart
              margins= {margins}
              data={generalChartData}
              width={width}
              height={height}
              chartSeries={chartSeries}
              x={x}
            />
            )
        }
    }

export default Line;