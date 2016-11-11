import React, { Component } from 'react';
import './create.css';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '',description:''};

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
    var id = 1;
    var storage = '';
    if(localStorage.getItem('storage')){
      storage = JSON.parse(localStorage.getItem('storage'));
      id = storage.cards.length + 1;
      storage.cards.push({"id":id,"title": this.state.title,"description": this.state.description});    
    }else{
      var card = [{ id:id,title: this.state.title,description: this.state.description }];
      storage = { 'cards': card };
    }
    localStorage.setItem('storage',JSON.stringify(storage));

    console.log("localStorage",localStorage.getItem('storage'));
    // alert('A name was submitted: ' + this.state.title + this.state.description);
    event.preventDefault();
  }

  render() {
    return (
      <div className="formContainer">
        <h3>Create Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label for="title">Title</label>
          <input type="text" id="title" value={this.state.title} onChange={this.handleTitle} />
          <label for="description">Description</label>
          <textarea id="description" value={this.state.description} onChange={this.handleDescription} />
          <input type="submit" id="formSubmit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateForm;