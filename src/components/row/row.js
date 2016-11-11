import React, { Component } from 'react';
import logo from './../../../assets/images/default.png';
import './row.css';

class Row extends Component {
  render() {
    return (
            <li id="row-element">
                <img role="presentation" src={logo} />
                <h3>{this.props.titleProp}</h3>
                <p>{this.props.descProp}</p>
            </li>
    );
  }
}

export default Row;