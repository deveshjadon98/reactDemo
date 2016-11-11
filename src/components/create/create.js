import React, { Component } from 'react';
import './create.css';

class CreateForm extends Component {
   render() {

    var form = this.transferPropsTo(
      <Form ref="form" component={React.DOM.div} />
    )

    return (
        <form onSubmit={this.onSubmit} className="CreateForm">
          {form}
          <button type="submit">Submit</button>
        </form>
    )
  }

  onSubmit(e){
    e.preventDefault()
    alert('form submitted!')
  }
}

export default CreateForm;