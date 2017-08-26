import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'rd3';

const LineChart = rd3.LineChart;

var lineData = [
      { 
        name: 'series1',
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      }
    ];

class ClosedMale extends React.Component{
  render() {
    return  (
      <div>
      <LineChart
        legend={true}
        data={lineData}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Closed Male"
        yAxisLabel="Rate of"
        xAxisLabel="Age"
        domain={{x: [,6], y: [-10,]}}
        gridHorizontal={true}
      />
      </div>
  )}
};

export default ClosedMale;