import React, { Component } from "react";
import Title from "./Title";
import Text from "./Text";
import Button from "./Button";
class Cards extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article className="cards">
				<Title lvl="h2" title={this.props.title} />
				<img src={this.props.src} alt={this.props.title} />
				<Text>{this.props.children}</Text>
				{this.props.isLoged && (
					<Button
						panier={this.props.panier}
						res={this.props.res}
						price={this.props.price}
					>
						ajouter au panier
					</Button>
				)}
			</article>
		);
	}
}

export default Cards;
