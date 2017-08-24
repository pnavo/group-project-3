import React from 'react';
import Bar from './barChart';
import Line from './lineChart';
import Dropdowns from './dropdownlist';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// };
		// this.handleInputChange = this.handleInputChange.bind(this);
		// this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	// handleInputChange(event) {
	// 	this.setState({ [event.target.name]: event.target.value });
	// }
	// handleButtonClick() {
	// 	this.setParent(this.state.topic, this.state.startYear, this.state.endYear);
	// 	console.log("click")
	// 	helpers.getArticles(this.state.topic, this.state.startYear, this.state.endYear).then(function(response){
	// 		console.log(response.data)
	// 		this.setState({articles: response.data.response.docs})
	// 	}.bind(this))
	// 	console.log(this.state.articles)
	// }
	
	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">Search</h3>
				  	</div>
				  	<div className="panel-body">
				  		<Dropdowns/>
						<br/>
						<div id="searchSubmitDiv">
							<button
								onClick={this.handleButtonClick}
								className="btn btn-default"
							>
								Submit
							</button>
						</div>
				  	</div>
				</div>
				<div>
					<BarChart/>
				</div>
				<div>
					<LineChart/>
				</div>
			</div>
		);
	}
}

export default Homepage;