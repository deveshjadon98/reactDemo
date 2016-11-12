import React, { Component } from 'react';
import './list.css';
import Row from './../../components/row/row';

class List extends Component {
  constructor(props) {
        super(props);
    }

    render() {
        var indents = [];
        if(this.props.searchResult != ""){
            this.props.searchResult.forEach((e) => {
                if(e.status === "active")
                    indents.push(<Row idProp={e.id} titleProp={e.title} descProp={e.description} />);
            });
        }else{
            indents.push(<h1>NO POSTS.</h1>);
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