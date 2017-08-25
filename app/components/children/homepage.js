import React from 'react';
import Bar from './barChart';
import Line from './lineChart';

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
				    	<h3 className="panel-title">How to view:</h3>
				  	</div>
				  	<div className="panel-body">
				  		<div>
					  		<select class="chosen-select" id="q1">
		                        <option value="select">Select an Optison</option>
		                        <option value="overall">overall</option>
		                        <option value="specific">specific</option>
	                         </select>
	                    </div>
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
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<Bar/>
						</div>
						<div className="col-md-6">
							<Line/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;