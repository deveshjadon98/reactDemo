import React, { Component } from 'react';
import logo from './../../../assets/images/default.png';
import {Link} from 'react-router';
import './row.css';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = { id : this.props.idProp};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    let storage = localStorage.getItem('storage');
    if(storage){
      storage = JSON.parse(storage);
      var cards = storage.cards;
      console.log("localStorage before",localStorage.getItem('storage'));
      for(var i=0; i<cards.length; i++)
      {
        if(cards[i].id === this.state.id)
          cards[i].status = "in_active";
      }
      storage.cards = cards;
      localStorage.setItem('storage',JSON.stringify(storage));
      console.log("localStorage after",localStorage.getItem('storage'));
    }
  }

  render() {
    return (
            <li id="row-element">
                <img role="presentation" src={logo} />
                <h3>{this.props.titleProp}</h3>
                <p>{this.props.descProp}</p>
                <Link to={'/update/'+this.state.id }>Update</Link>
                <button onClick={this.handleDelete}>Delete</button>
            </li>
    );
  }
}

export default Row;