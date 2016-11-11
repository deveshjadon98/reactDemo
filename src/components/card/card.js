import React, { Component } from 'react';
import logo from './../../../assets/images/default.png';
import './card.css';

class Card extends Component {
  render() {
    return (
                <div className="pin">
                    <img role="presentation" src={logo} />
                    <h1>{this.props.titleProp}</h1>
                    <p>{this.props.descProp}</p>
                </div>
    );
  }
}

export default Card;