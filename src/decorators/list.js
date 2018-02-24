import React, {Component} from "react";

export default (OriginalComponent) => class List extends Component {
	state = {
		isOpen: false
	};
	
	toggleItem = () => this.setState({isOpen: !this.state.isOpen});
	
	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleItem={this.toggleItem}/>
	}
};