import React, { Component } from "react";

class Text extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <>{this.props.children}</>;
	}
}

export default Text;
