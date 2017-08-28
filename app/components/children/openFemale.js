import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'rd3';
import axios from 'axios';

const LineChart = rd3.LineChart;

var lineData = [
      { 
        name: 'series1',
        values: [ { x: 17, y: 0 }],
        strokeWidth: 3,
        strokeDashArray: "5,5"
      }
    ];

class OpenFemale extends React.Component{
  constructor(props){
    super(props);
  }
  
  componentWillReceiveProps() {
    lineData[0].values = [{ x: 18, y: 0 }];
    
    if(this.props.selector) {
      lineData[0].name = this.props.selector
      for (var i = 18; i < 90; i++) {
        var counter = 0
        for(var j = 0; j<this.props.data.length;j++){
          if(this.props.data[j].age===i){
            counter = counter + 1
          }
        }
        lineData[0].values.push({ x: i, y: counter })
      }
     }      
  }

  render() {
    return  (
      <div className="line-graph">
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
        title="Open Female"
        yAxisLabel="Rate of"
        xAxisLabel="Age"
        domain={{x: [18,90], y: [0,10]}}
        gridHorizontal={true}
      />
      </div>
  )}
};

export default OpenFemale;