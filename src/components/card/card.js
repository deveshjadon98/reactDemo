import React, { Component } from 'react';
import logo from './../../../assets/images/default.png';
import './card.css';

class Card extends Component {
  render() {
    return (
                <div className="pin">
                    <img role="presentation" src={logo} />
                    <h1>Title</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed feugiat consectetur pellentesque. Nam ac elit risus, 
                        ac blandit dui. Duis rutrum porta tortor ut convallis.
                        Duis rutrum porta tortor ut convallis.
                    </p>
                </div>
    );
  }
}

export default Card;