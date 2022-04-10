import React, { Component } from "react";
import Login from "../components/Login";
import Title from "../components/Title";

class Header extends Component {
	constructor(props) {
	    super(props);

	}

	render() {
		return (
			<header className="header">
				<Title lvl="h1" title="Site de thé"></Title>
				<Login isLoged={this.props.isLoged} resLog={this.props.resLog}/>
			</header>
		);
	}
}

export default Header;
