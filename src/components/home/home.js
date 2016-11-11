import React, { Component } from 'react';
import './home.css';
import Header from './../header/header'
import Grid from './../../Layouts/grid/grid';
import List from './../../Layouts/list/list';
class Home extends Component {

  
  constructor(props) {
    super(props);
    this.state = { grid : true };
    this.updateStateToGrid = this.updateStateToGrid.bind(this);
    this.updateStateToList = this.updateStateToList.bind(this);
  }

  updateStateToGrid(){
      // console.log("before grid", this.state.grid);
      this.setState({ grid: true });
      // console.log("After grid", this.state.grid);
  }

  updateStateToList(){
      // console.log("before list", this.state.grid);
      this.setState({ grid:false });
      // console.log("after list", this.state.grid);
  }

  render() {
    return (
      <div>
        <Header myDataProp={this.state.grid} gridStateProp={ this.updateStateToGrid } listStateProp={ this.updateStateToList } />
        { this.state.grid ? <Grid/> : <List /> }
      </div>
    );
  }
}

export default Home;
