import React, { Component } from 'react';
// import logo from './../../../assets/images/logo.jpg';
import './grid.css';
import Card from './../../components/card/card';

class Grid extends Component {
  render() {
    return (
        <div id="container">
            <div id="wrapper">
                <div id="columns">
                    <Card />
                    <Card /> 
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
  }
}

export default Grid;