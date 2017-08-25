import React from 'react';
import Bar from './children/barChart';
import Line from './children/lineChart';
import Homepage from './children/homepage';

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