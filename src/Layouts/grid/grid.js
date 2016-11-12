import React, { Component } from 'react';
import './grid.css';
import Card from './../../components/card/card';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.deleteCardFromResult = this.deleteCardFromResult.bind(this);
    }

    deleteCardFromResult(id){
        this.props.deleteCard(id);
    }

    render() {
        var indents = [];
        if(this.props.searchResult != ""){
            this.props.searchResult.forEach((e) => {
                if(e.status === "active")
                    indents.push(<Card idProp={e.id} titleProp={e.title} descProp={e.description} deleteCard={ this.deleteCardFromResult } />);
            });
        }else{
            indents.push(<h1>NO POSTS.</h1>);
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