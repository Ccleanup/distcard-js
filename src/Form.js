import React, { Component } from 'react'

class Form extends Component {
  state = {
    noPlayer: '',
  }

  handleChange = event => {

    this.setState({
        noPlayer: event.target.value,
    })

  }

  submitForm = () => {
    this.props.handleSubmit(this.state.noPlayer)
    
  }


  render() {
    
    return (
      <form>
        <label htmlFor="noPlayer"></label>
        <input
          type="text"
          name="noPlayer"
          id="noPlayer"
          value={this.state.noPlayer}
          placeholder="Number Of Players"
          onChange={this.handleChange} />
          
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );

  }

}

export default Form;