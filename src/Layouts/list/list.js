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
            indents.push(<Row titleProp={e.title} descProp={e.description} />);
        });
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