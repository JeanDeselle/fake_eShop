import "./App.css";
import React, { Component } from "react";
import Main from "./containers/Main";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

class App extends Component {
	state = {
		isLoged: false,
	};

	loged() {
	   
		this.setState({
			isLoged: !this.state.isLoged,
		});
		
	}

	responce() {
		this.loged();
	}

	render() {
		return (
			<>
				<Header isLoged={this.state.isLoged} resLog={this.responce.bind(this)}/>
				<Main isLoged={this.state.isLoged} />
				<Footer isLoged={this.state.isLoged} />
			</>
		);
	}
}

export default App;
