import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Grid from './Layouts/grid/grid';
import List from './Layouts/list/list';
class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = { grid : true };
  }

  onGridPress(){
      App.setState({
          grid: true
          });
  };

  onListPress(){
      App.setState({
          grid:false
          });
  };

  render() {
    return (
      <div className="App">
        <Header />
        { this.state.grid ? <Grid/> : <List /> }
      </div>
    );
  }
}

export default App;
