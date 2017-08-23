import React from 'react';
import BarChart from './children/barChart';
import LineChart from './children/lineChart';
import Dropdowns from './children/dropdownlist'

class Main extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>Medical Bot Stuff</h1>
					</div>
			<div className="container-fluid">
				{this.props.children}
			</div>
		</div>
	</div>
		);
	}

}

export default Main;