import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'rd3';
import axios from 'axios';

const LineChart = rd3.LineChart;

var lineData = [
      { 
        name: 'series1',
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      }
    ];

class ClosedFemale extends React.Component{
  overall(){
    axios.get("/overall/female/closed")
  }

  othbleed(){
    axios.get("/othbleed/female/closed")
  }


  super(){
    axios.get("/supinfec/female/closed")

  }

  wound(){
    axios.get("/woundinfd/female/closed")

  }
  
  trans(){
    axios.get("/dehis/female/closed")

  }

  reop(){
    axios.get("/returnor/female/closed")

  }

read(){
    axios.get"/readmission/female/closed")

  }
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
        title="Closed Female"
        yAxisLabel="Rate of"
        xAxisLabel="Age"
        domain={{x: [,6], y: [-10,]}}
        gridHorizontal={true}
      />
      </div>
  )}
};

export default ClosedFemale;