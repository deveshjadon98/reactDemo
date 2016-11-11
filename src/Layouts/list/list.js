import React, { Component } from 'react';
import './list.css';
import Row from './../../components/row/row';

class List extends Component {
  render() {
    return (
        <div>
            <ul id="list">
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
            </ul>
        </div>
    );
  }
}

export default List;