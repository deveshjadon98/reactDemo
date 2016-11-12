import React, { Component } from 'react';
import './update.css';
import {Link,browserHistory} from 'react-router';

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
    for(var i=0; i<cards.length; i++){
        if(cards[i].id == this.props.params.id){
            cards[i].title = this.state.title;
        }
    }
    storage.cards = cards;
    localStorage.setItem('storage',JSON.stringify(storage));
    browserHistory.push('/home');
    event.preventDefault();
  }
  
  componentWillMount(){
    var storage = JSON.parse(localStorage.getItem('storage'));
    var cards = storage.cards;
    cards.forEach((e) => {
            if(e.id == this.props.params.id){
                this.setState({id:e.id,title: e.title,description:e.description});
            }
        });
  }

  render() {
    return (
      <div className="formContainer">
        <h3>Update</h3>
        <li><Link to="/home">Home</Link></li>
        <form onSubmit={this.handleSubmit}>
          <label for="title">Title</label>
          <input type="text" required id="title" value={this.state.title} onChange={this.handleTitle} />
          <label for="description">Description</label>
          <textarea readOnly id="description" value={this.state.description} onChange={this.handleDescription} />
          <input type="submit" id="formSubmit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Update;