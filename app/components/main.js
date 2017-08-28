import React from 'react';
import OpenMale from './children/openMale';
import ClosedMale from './children/closedMale';
import OpenFemale from './children/openFemale';
import ClosedFemale from './children/closedFemale';
import Homepage from './children/homepage';

class Main extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>GAAP Medical Data Analysis</h1>
					</div>
					<div className="container-fluid">
						{this.props.children}
					</div>
				</div>
			<div className="navbar navbar-default navbar-fixed-bottom" id="footer">
				<div className="container-fluid">
					<p className="text-muted text-center footer">&copy; Copyright 2017 GAAP Medical</p>
				</div>
			</div>
			</div>
		);
	}

}

export default Main;