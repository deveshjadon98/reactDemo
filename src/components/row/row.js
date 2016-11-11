import React, { Component } from 'react';
import logo from './../../../assets/images/default.png';
import './row.css';

class Row extends Component {
  render() {
    return (
            <li id="row-element">
                <img role="presentation" src={logo} />
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            </li>
    );
  }
}

export default Row;