import React, { Component } from 'react';
import './home.css';
import Header from './../header/header'
import Search from './../search/search';
import Grid from './../../Layouts/grid/grid';
import List from './../../Layouts/list/list';
class Home extends Component {

  
  constructor(props) {
    super(props);
    this.state = { grid:true, isStorageSet:false, searchResult:'', isSearch:false };
    this.updateStateToGrid = this.updateStateToGrid.bind(this);
    this.updateStateToList = this.updateStateToList.bind(this);
    this.updateStateSearchResult = this.updateStateSearchResult.bind(this);
    this.deleteCardFromResult = this.deleteCardFromResult.bind(this);
  }

  componentWillMount(){
    localStorage.removeItem("searchResult")
    if(JSON.parse(localStorage.getItem('storage'))){
      this.setState({ isStorageSet: true });
      var cards = JSON.parse(localStorage.getItem("storage")).cards;
      this.setState({ searchResult : cards });
    }
  }

  deleteCardFromResult(id){
      var cards = JSON.parse(localStorage.getItem("storage")).cards;
      this.setState({ searchResult : cards });
  }

  updateStateSearchResult(){
    var cards = JSON.parse(localStorage.getItem("searchResult"));
    this.setState({ searchResult : cards,isSearch:true });
  }

  updateStateToGrid(){
      this.setState({ grid: true });
  }

  updateStateToList(){
      this.setState({ grid:false });
  }

  render() {
    return (
      <div>
        <Header myDataProp={this.state.grid} gridStateProp={ this.updateStateToGrid } listStateProp={ this.updateStateToList } />
        { this.state.isStorageSet ? <Search searchResultStateProp={ this.updateStateSearchResult }/> : '' }
        { this.state.grid ? <Grid deleteCard={this.deleteCardFromResult} searchResult={this.state.searchResult} isSearch={this.state.isSearch}/> : <List deleteCard={this.deleteCardFromResult} searchResult={this.state.searchResult} isSearch={this.state.isSearch}/> }
      </div>
    );
  }
}

export default Home;
