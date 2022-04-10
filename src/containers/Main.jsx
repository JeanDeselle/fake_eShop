import React, { Component } from "react";
import Cards from "../components/Cards";
import Panier from "../components/Panier";
import tab from "../ressource/tab.js";

class Main extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		panier: 0,
	};

	add(price) {
		this.setState({
			panier: price ? this.state.panier + price : this.state.panier + 1,
		});
	}
	responce(price) {
		this.add(price);
	}

	render() {
		return (
			<main id="main">
				<Panier panier={this.state.panier} />
				{tab.map((the) => {
					return (
						<Cards
							key={the.id}
							title={the.name}
							src={the.imgName}
							res={this.responce.bind(this)}
							price={the.price}
							isLoged={this.props.isLoged}
						>
							<div>
								<p>description : {the.description}</p>
								<p>
									<span className="price">
										prix : {the.price} €
									</span>
								</p>
							</div>
						</Cards>
					);
				})}
			</main>
		);
	}
}

export default Main;
