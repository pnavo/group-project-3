import React from 'react';
import OpenMale from './openMale';
import ClosedMale from './closedMale';
import OpenFemale from './openFemale';
import ClosedFemale from './closedFemale';
import axios from 'axios';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selector: "",
			omData:{},
			ofData:{},
			cfData:{},
			cmData:{}
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
	// 	helpers.getArticles(this.state.topic, this.state.startYear, this.state.endYear).then((response) => {
	// 		console.log(response.data)
	// 		this.setState({articles: response.data.response.docs})
	// 	}.bind(this))
	// 	console.log(this.state.articles)
	// }
	handleOverallButtonClick() {
		axios.get("/overall/male/open").then((response) => {
			this.setState({omData: response.data})
		})

		axios.get("/overall/male/closed").then((response) => {
			this.setState({cmData: response.data})
		})

		axios.get("/overall/female/open").then((response) => {
			this.setState({ofData: resonse.data})
		})

		axios.get("/overall/female/closed").then((response) => {
			this.setState({cfData: response.data})
		})
	}

	handleSuperficialButtonClick(){
		axios.get("/supinfec/male/open").then((response) => {
			this.setState({omData: response.data})
		})

		axios.get("/supinfec/male/closed").then((response) => {
			this.setState({cmData: response.data})
		})

		axios.get("/supinfec/female/open").then((response) => {
			this.setState({ofData: resonse.data})
		})

		axios.get("/supinfec/female/closed").then((response) => {
			this.setState({cfData: response.data})
		})
	}

	handleDeepButtonClick(){
		
		axios.get("/wndinfd/male/open").then((response) => {
			this.setState({omData: response.data})
		})

		axios.get("/wndinfd/male/closed").then((response) => {
			this.setState({cmData: response.data})
		})

		axios.get("/wndinfd/female/open").then((response) => {
			this.setState({ofData: resonse.data})
		})

		axios.get("/wndinfd/female/closed").then((response) => {
			this.setState({cfData: response.data})
		})
	}

	handleWoundButtonClick(){
		
		axios.get("/dehis/male/open").then((response) => {
			this.setState({omData: response.data})
		})

		axios.get("/dehis/male/closed").then((response) => {
			this.setState({cmData: response.data})
		})

		axios.get("/dehis/female/open").then((response) => {
			this.setState({ofData: resonse.data})
		})

		axios.get("/dehis/female/closed").then((response) => {
			this.setState({cfData: response.data})
		})
	}

	handleTransfusionButtonClick(){
			this.setState({selector: "othbleed"})
		
		axios.get("/othbleed/male/open").then((response) => {
			this.setState({omData: response.data})
		})

		axios.get("/othbleed/male/closed").then((response) => {
			this.setState({cmData: response.data})
		})

		axios.get("/othbleed/female/open").then((response) => {
			this.setState({ofData: resonse.data})
		})

		axios.get("/othbleed/female/closed").then((response) => {
			this.setState({cfData: response.data})
		})

	}

	handleReadButtonClick(){
	
		axios.get("/readmission/male/open").then((response) => {
			this.setState({omData: response.data})
		})

		axios.get("/readmission/male/closed").then((response) => {
			this.setState({cmData: response.data})
		})

		axios.get("/readmission/female/open").then((response) => {
			this.setState({ofData: resonse.data})
		})

		axios.get("/readmission/female/closed").then((response) => {
			this.setState({cfData: response.data})
		})
	}

	handleReopButtonClick(){
		
		axios.get("/returnor/male/open").then((response) => {
			this.setState({omData: response.data})
		})

		axios.get("/returnor/male/closed").then((response) => {
			this.setState({cmData: response.data})
		})

		axios.get("/returnor/female/open").then((response) => {
			this.setState({ofData: resonse.data})
		})

		axios.get("/returnor/female/closed").then((response) => {
			this.setState({cfData: response.data})
		})
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
							data={this.state.omData}
							/>
						</div>
						<div className="col-md-6">
							<OpenFemale
							data={this.state.ofData}
							/>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<ClosedMale
							data={this.state.cmData}
							/>
						</div>
						<div className="col-md-6">
							<ClosedFemale
							data={this.state.cfData}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;