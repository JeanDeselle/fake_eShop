import React, { Component } from "react";

class Button extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		test: 0,
	};
	render() {
		return (
			<button className="btn-add" onClick={() => this.props.res(this.props.price)}>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
