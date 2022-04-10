import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                {this.props.lvl === "h1" && <h1>{this.props.title}</h1>}
                {this.props.lvl === "h2" && <h2>{this.props.title}</h2>}
                {this.props.lvl === "h3" && <h3>{this.props.title}</h3>}
                {this.props.lvl === "h4" && <h4>{this.props.title}</h4>}
            </>
        );
    }
}

export default Title;