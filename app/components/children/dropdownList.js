import React from 'react';
import ReactDOM from 'react-dom';
import DropdownList from 'react-widgets/lib/DropdownList';

var primaryObjective = ['overall','specific'];

class Dropdowns extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: primaryObjective[0]
		}
	}

	render() {
		return (
			<DropdownList
				data={primaryObjective}
				value={this.state.value}
				onChange={value => this.setState({ value })}/>)
	}
}

export default Dropdowns;