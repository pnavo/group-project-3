import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'rd3';
import axios from 'axios';

const LineChart = rd3.LineChart;


var data = {}




var lineData = [
      { 
        name: 'series1',
        values: [ { x: 18, y: .53 }, { x: 25, y: .8 }, { x: 40, y: .9 }, { x: 45, y: .3 }, { x: 50, y: .2 }, { x: 60, y: .15 }, { x: 65, y: .10 } ],

        strokeWidth: 3,
        strokeDashArray: "5,5",
      }
    ];

class OpenMale extends React.Component{
  componentDidMount(){
    data = axios.get({this.props.button})
  }
  overall(){
    axios.get("/overall/male/open")
  }

  othbleed(){
    axios.get("/othbleed/male/open")
  }


  super(){
    axios.get("/supinfec/male/open")

  }

  wound(){
    axios.get("/woundinfd/male/open")

  }
  
  trans(){
    axios.get("/dehis/male/open")

  }

  reop(){
    axios.get("/returnor/male/open")

  }

read(){
    axios.get"/readmission/male/open")

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
        title="Open Male"
        yAxisLabel="Rate of"
        xAxisLabel="Age"
        domain={{x: [18,90], y: [0,1]}}
        gridHorizontal={true}
      />
      </div>
  )}
};

export default OpenMale;

