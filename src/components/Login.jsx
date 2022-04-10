import React, { Component } from "react";
import Users from "../ressource/Users";
class Login extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.isLoged);
		// resLog={this.props.resLog}
		this.state = {
			pseudo: "",
			password: "",
			find: null,
			connected: {
				pseudo: null,
				password: null,
				logo: null,
			},
		};
	}
	log() {
		const pseudo = this.state.pseudo;
		const password = this.state.password;
		if (pseudo != "" && password != "") {
			Users.forEach((user) => {
				if (user.pseudo === pseudo && user.password === password) {
					this.props.resLog();
					this.state.find = true;
					this.state.connected.pseudo = pseudo;
					this.state.connected.password = password;
					this.state.connected.logo = user.srcImg;
				} else if (!this.state.find) {
					this.state.find = false;
					// document.querySelector('.err')
				}
			});
			// console.log(this.state.find);
			if (!this.state.find) {
				document.querySelector(".err").classList.toggle("display");
			}
		}
	}

	render() {
		return (
			<div>
				{this.props.isLoged ? (
					<button
						className="disconnect"
						onClick={(e) => {
							e.preventDefault();
							this.props.resLog();
							this.state.pseudo = "";
							this.state.password = "";
							this.state.find = null;
							this.state.connected.pseudo = null;
							this.state.connected.password = null;
							this.state.connected.logo = null;
						}}
					>
						déconnexion
					</button>
				) : (
					<div className="ctn-login">
						<form>
							<div>
								<input
									name="psuedo"
									id="pseudo"
									type="text"
									placeholder="Pseudo"
									value={this.state.pseudo}
									onChange={(e) =>
										this.setState({
											pseudo: e.target.value,
										})
									}
								/>
							</div>
							<div>
								<input
									name="password"
									id="password"
									type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={(e) =>
										this.setState({
											password: e.target.value,
										})
									}
								/>
							</div>
							<p className="display err">existe pas</p>
							<input
								type="submit"
								value="login"
								onClick={(e) => {
									e.preventDefault();
									this.log();
								}}
							/>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export default Login;
