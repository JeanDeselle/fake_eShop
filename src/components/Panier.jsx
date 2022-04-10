import React, { Component } from 'react';

class panier extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='fas fa-basket-shopping'>
                <span id='panier'>{this.props.panier} €</span>
            </div>
        );
    }
}


export default panier;