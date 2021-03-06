import React, { Component } from 'react';
import logo from './../../../assets/images/default.png';
import {Link} from 'react-router';
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
      for(var i=0; i<cards.length; i++)
      {
        if(cards[i].id === this.state.id)
          cards[i].status = "in_active";
      }
      storage.cards = cards;
      localStorage.setItem('storage',JSON.stringify(storage));
      this.props.deleteCard(this.state.id);
    }
  }

  render() {
    return (
                <div className="pin">
                    <img role="presentation" src={logo} />
                    <h1>{this.props.titleProp}</h1>
                    <p>{this.props.descProp}</p>
                    <Link to={'/update/'+this.props.idProp }>Update</Link>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
    );
  }
}

export default Card;