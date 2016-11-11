import React, { Component } from 'react';
import logo from './../../../assets/images/default.png';
import './card.css';

class Card extends Component {
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
                <div className="pin">
                    <img role="presentation" src={logo} />
                    <h1>{this.props.titleProp}</h1>
                    <p>{this.props.descProp}</p>
                    <button>Update</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
    );
  }
}

export default Card;