import React, { Component } from 'react';
// import logo from './../../../assets/images/logo.jpg';
import './grid.css';
import Card from './../../components/card/card';

class Grid extends Component {
  render() {
    var storage = localStorage.getItem('storage');
    var indents = [];
    if(storage){
        var cards = JSON.parse(storage).cards;
        cards.forEach((e) => {
            if(e.status === "active")
                indents.push(<Card idProp={e.id} titleProp={e.title} descProp={e.description} />);
        });
    }else{
        indents.push(<h1>NO POSTS YET, HIT THE CREATE BUTTON</h1>);
    }
    
    return (
        <div id="container">
            <div id="wrapper">
                <div id="columns">
                    {indents}
                </div>
            </div>
        </div>
    );
  }
}

export default Grid;