import React from 'react';
import OpenMale from './openMale';
import ClosedMale from './closedMale';
import OpenFemale from './openFemale';
import ClosedFemale from './closedFemale';

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
	handleOverallButtonClick() {
		this.overall()
	}

	handleSuperficialButtonClick(){
		this.super()
	}

	handleDeepButtonClick(){
		this.deep()
	}

	handleWoundButtonClick(){
		this.wound()
	}

	handleTransfusionButtonClick(){
		this.trans()
	}

	handleReadButtonClick(){
		this.read()
	}

	ReopButtonClick(){
		this.reop()
	}
	
	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-default">
				  	<div className="panel-heading">
				    	<h3 className="panel-title">How to view:</h3>
				  	</div>
				  	<div className="panel-body">
			  			<div id="searchOverallDiv">
							<button
								onClick={this.handleOverallButtonClick}
								className="btn btn-default pull-left"
							>
								Overall
							</button>
						</div>
				    	<div id="searchSuperficiallDiv">
							<button
								onClick={this.handleSuperficialButtonClick}
								className="btn btn-default pull-left"
							>
								Superficial Infection
							</button>
						</div>
						<div id="searchDeepDiv">
							<button
								onClick={this.handleDeepButtonClick}
								className="btn btn-default pull-left"
							>
								Deep Infection
							</button>
						</div>
						<div id="searchWoundDiv">
							<button
								onClick={this.handleWoundButtonClick}
								className="btn btn-default pull-left"
							>
								Wound Disruptions
							</button>
						</div>
						<div id="searchTransfusionDiv">
							<button
								onClick={this.handleTransfusionButtonClick}
								className="btn btn-default pull-left"
							>
								Transfusion
							</button>
						</div>
						<div id="searchReadDiv">
							<button
								onClick={this.handleReadButtonClick}
								className="btn btn-default pull-left"
							>
								Readmission
							</button>
						</div>
						<div id="searchReopDiv">
							<button
								onClick={this.ReopButtonClick}
								className="btn btn-default pull-left"
							>
								Reoperation
							</button>
						</div>
				  	</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<OpenMale
							overall = {this.handleOverallButtonClick()}

							superficial={this.handleSuperficialButtonClick()}

							deep= {this.handleDeepButtonClick()}

							wound= {this.handleWoundButtonClick()}
							
							trans= {this.handleTransfusionButtonClick()}

							read= {this.handleReadButtonClick()}

							reop = {this.ReopButtonClick()}
							/>
						</div>
						<div className="col-md-6">
							<OpenFemale
							overall = {this.handleOverallButtonClick()}

							superficial={this.handleSuperficialButtonClick()}

							deep= {this.handleDeepButtonClick()}

							wound= {this.handleWoundButtonClick()}
							
							trans= {this.handleTransfusionButtonClick()}

							read= {this.handleReadButtonClick()}

							reop = {this.ReopButtonClick()}
							/>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<ClosedMale
							overall = {this.handleOverallButtonClick()}

							superficial={this.handleSuperficialButtonClick()}

							deep= {this.handleDeepButtonClick()}

							wound= {this.handleWoundButtonClick()}
							
							trans= {this.handleTransfusionButtonClick()}

							read= {this.handleReadButtonClick()}

							reop = {this.ReopButtonClick()}
							/>
						</div>
						<div className="col-md-6">
							<ClosedFemale
							overall = {this.handleOverallButtonClick()}

							superficial={this.handleSuperficialButtonClick()}

							deep= {this.handleDeepButtonClick()}

							wound= {this.handleWoundButtonClick()}
							
							trans= {this.handleTransfusionButtonClick()}

							read= {this.handleReadButtonClick()}

							reop = {this.ReopButtonClick()}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;