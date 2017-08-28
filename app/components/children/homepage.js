import React from 'react';
import OpenMale from './openMale';
import ClosedMale from './closedMale';
import OpenFemale from './openFemale';
import ClosedFemale from './closedFemale';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		
		this.handleOverallButtonClick = this.handleOverallButtonClick.bind(this);
		this.handleSuperficialButtonClick = this.handleSuperficialButtonClick.bind(this);
		this.handleDeepButtonClick = this.handleDeepButtonClick.bind(this);
		this.handleWoundButtonClick = this.handleWoundButtonClick.bind(this);
		this.handleTransfusionButtonClick = this.handleTransfusionButtonClick.bind(this);
		this.handleReadButtonClick = this.handleReadButtonClick.bind(this);
		this.handleReopButtonClick= this.handleReopButtonClick.bind(this);
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
		var cf = () => {axios.get("/overall/female/closed")}
		var cm = () => {axios.get("/overall/male/closed")}
		var of = () => {axios.get("/overall/female/open")}
		var om = () => {axios.get("/overall/female/closed")}

	}

	handleSuperficialButtonClick(){
		var cf = () => {axios.get("/supinfec/female/closed")}
		var cm = () => {axios.get("/supinfec/male/closed")}
		var of = () => {axios.get("/supinfec/female/open")}
		var om = () => {axios.get("/supinfec/female/closed")}
	}

	handleDeepButtonClick(){
		var cf = () => {axios.get("/woundinfd/female/closed")}
		var cm = () => {axios.get("/woundinfd/male/closed")}
		var of = () => {axios.get("/woundinfd/female/open")}
		var om = () => {axios.get("/woundinfd/female/closed")}
	}

	handleWoundButtonClick(){
		var cf = () => {axios.get("/dehis/female/closed")}
		var cm = () => {axios.get("/dehis/male/closed")}
		var of = () => {axios.get("/dehis/female/open")}
		var om = () => {axios.get("/dehis/female/closed")}
	}

	handleTransfusionButtonClick(){
		var cf = () => {axios.get("/othbleed/female/closed")}
		var cm = () => {axios.get("/othbleed/male/closed")}
		var of = () => {axios.get("/othbleed/female/open")}
		var om = () => {axios.get("/othbleed/female/closed")}

	}

	handleReadButtonClick(){
		var cf = () => {axios.get("/readmission/female/closed")}
		var cm = () => {axios.get("/readmission/male/closed")}
		var of = () => {axios.get("/readmission/female/open")}
		var om = () => {axios.get("/readmission/female/closed")}
	}

	handleReopButtonClick(){
		var cf = () => {axios.get("/returnor/female/closed")}
		var cm = () => {axios.get("/returnor/male/closed")}
		var of = () => {axios.get("/returnor/female/open")}
		var om = () => {axios.get("/returnor/female/closed")}
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
								onClick={this.handleReopButtonClick}
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

							reop = {this.handleReopButtonClick()}
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

							reop = {this.handleReopButtonClick()}
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

							reop = {this.handleReopButtonClick()}
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

							reop = {this.handleReopButtonClick()}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;