import React, { Component } from 'react';

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tom Rook",
      email : "tomrook@fakemail.com",
      phone : "555-415-222",
      edit : false
    }
  }

  editDetails() {
    if(this.state.edit){
      return (
        <div>
          <br></br>
          <input id="name"></input>
          <input id="email"></input>
          <input id="phone"></input>
          <br></br>
          <button onClick={this.submitAnswers}>Submit</button>
          <button onClick={this.togglePopup}>Cancel</button>
        </div>
      )
    }
   }

  togglePopup = () => {
    this.setState(
        { edit: !this.state.edit}
    )
  }

  submitAnswers = () => {
    let newName = document.getElementById("name").value;
    if(newName === ""){
      newName = this.state.name;
    }
    let newEmail = document.getElementById("email").value;
    if(newEmail === ""){
      newEmail = this.state.email;
    }
    let newPhone = document.getElementById("phone").value;
    if(newPhone === ""){
      newPhone = this.state.phone;
    }
    this.setState(
      { name: newName,
        email: newEmail,
        phone: newPhone
      }
    )
    this.togglePopup();
  }

  render() {
    return (
      <div id="Personal">
        <h1>Personal Details</h1>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>phone: {this.state.phone}</p>
        <button onClick={this.togglePopup}>Edit</button>
        {this.editDetails()}
      </div>
    );
  }
}

export default Personal;
