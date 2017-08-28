import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'rd3';
import axios from 'axios';

const LineChart = rd3.LineChart;
var lineData = [
      { 
        name: 'series1',
        values: [ { x: 17, y: 0 },],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      }
    ];

class ClosedFemale extends React.Component{
  constructor(props){
    super(props);
  }
  
  componentWillReceiveProps() {

    console.log(this.props.data)
    
    if (this.props.selector === "othbleed") {
      for (var i = 18; i < 90; i++) {
        var counter = 0
        for(var j = 0; j<this.props.data.length;j++){
          if(this.props.data[j].age===i){
            counter = counter + 1
          }
        }
        console.log(counter)
        lineData[0].values.push({ x: i, y: [counter] })
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
        title="Closed Female"
        yAxisLabel="Rate of"
        xAxisLabel="Age"
        domain={{x: [18,90], y: [0,1]}}
        gridHorizontal={true}
      />
      </div>
  )}
};

export default ClosedFemale;