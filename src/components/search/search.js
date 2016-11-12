import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {query: '',filter:'title'};
    this.handleQuery = this.handleQuery.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuery(event) {
    this.setState({query: event.target.value});
  }

  handleFilter(event) {
    this.setState({filter: event.target.value});
  }

  handleSubmit(event) {
    var storage = localStorage.getItem('storage');
    var indents = [];
    var cards = JSON.parse(storage).cards;
    cards.forEach((e) => {
        var title = e.title.toLowerCase();
        var description = e.description.toLowerCase();
        var query = this.state.query.toLowerCase();
        if((this.state.filter == "title" && title.includes(query)) || (this.state.filter == "description" && description.includes(query))){
            indents.push(e);
        }
    });
    localStorage.setItem("searchResult",JSON.stringify(indents));
    this.props.searchResultStateProp();
    event.preventDefault();
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
            <input required type="text" value={this.state.query} onChange={this.handleQuery}/>
            Filter:
            <select value={this.state.filter} onChange={this.handleFilter}>
                <option value="title">Title</option>
                <option value="description">Description</option>
            </select>
            <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}

export default Search;