import React, { Component } from 'react';
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationArray: [],
      edit : false
    }
  }

  submitAnswers = (newUni, newCourse, newFrom, newTo) => {
    let newLearn = {
        uni: newUni,
        course: newCourse,
        from: newFrom,
        to: newTo,
        id: uniqid()
    }
    this.setState({
        educationArray: [...this.state.educationArray, newLearn]
      } 
    )
    this.togglePopup();
  }

  addNew = () => {
    if(this.state.edit){
      return (
        <div>
          <br></br>
          <input id="uni"></input>
          <input id="course"></input>
          <input id="from"></input>
          <input id="to"></input>
          <br></br>
          <button onClick={() => {this.submitAnswers(
            document.getElementById("uni").value,
            document.getElementById("course").value,
            document.getElementById("from").value,
            document.getElementById("to").value)}}>Submit</button>
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

  removeElement = (id) => {
    this.setState({
      educationArray: this.state.educationArray.filter((element) => element.id != id)
    })
  }

  render() {
    return (
      <div id="Education">
        <h1>Education</h1>
        <div>
          {this.state.educationArray.map((section) => {
            return ([
              <div key={section.id}>
                <p>{section.uni}</p>
                <p>{section.course}</p>
                <p>{section.from}</p>
                <p>{section.to}</p>
                <button onClick={() => {this.removeElement(section.id)}}>Remove</button>
                <button>Edit</button>
              </div>,
            ])
          })}
        </div>
        <button onClick={this.togglePopup}>Add New</button>
        {this.addNew()}
      </div>
    );
  }
}

export default Education;
