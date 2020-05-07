import React, { Component } from "react";

class FormInput extends Component {

  constructor(props) {
    super(props)

    console.log("Props in Class ", props.name)
  }  

  state = {
    name: "",
    age: ""
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  handleOnSubmit() {
    console.log(this.state.name)
    console.log(this.state.age)
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" 
            placeholder="Username" 
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input type="text" 
            placeholder="Age" 
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
          <input type="button" value="Submit" 
            onClick={this.handleOnSubmit.bind(this)}
            />
        </form>
      </div>
    );
  }
}

export default FormInput;
