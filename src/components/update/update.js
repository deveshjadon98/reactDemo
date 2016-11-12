import React, { Component } from 'react';
import './update.css';
import {Link} from 'react-router';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {id:this.props.params.id,title:'',description:''};
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleDescription(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    var storage = JSON.parse(localStorage.getItem('storage'));
    var cards = storage.cards;
    cards.forEach((e) => {
            if(e.id === this.state.id)
                e.title = this.state.title;
        });
    storage.cards = cards;
    localStorage.setItem('storage',JSON.stringify(storage));
    // this.history.pushState(null, 'home');
    console.log("localStorage",localStorage.getItem('storage'));
    // alert('A name was submitted: ' + this.state.title + this.state.description);
    event.preventDefault();
  }

  render() {
    var storage = JSON.parse(localStorage.getItem('storage'));
    var cards = storage.cards;
    
    cards.forEach((e) => {
            if(e.id === this.props.params.id){
                this.setState({title: e.title,description:e.description});
            }
        });
    console.log('props form link',this.props.params.id);
    return (
      <div className="formContainer">
        <h3>Update</h3>
        <li><Link to="/home">Home</Link></li>
        <form onSubmit={this.handleSubmit}>
          <label for="title">Title</label>
          <input type="text" id="title" value={this.state.title} onChange={this.handleTitle} />
          <label for="description">Description</label>
          <textarea readOnly id="description" value={this.state.description} onChange={this.handleDescription} />
          <input type="submit" id="formSubmit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Update;