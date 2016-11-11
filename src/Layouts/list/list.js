import React, { Component } from 'react';
import './list.css';
import Row from './../../components/row/row';

class List extends Component {
  render() {
    var storage = localStorage.getItem('storage');
    var indents = [];
    if(storage){
        var cards = JSON.parse(storage).cards;
        cards.forEach((e) => {
            if(e.status === "active")
                indents.push(<Row idProp={e.id} titleProp={e.title} descProp={e.description} />);
        });
    }else{
        indents.push(<h1>NO POSTS YET, HIT THE CREATE BUTTON</h1>);
    }
    return (
        <div>
            <ul id="list">
                {indents}
            </ul>
        </div>
    );
  }
}

export default List;