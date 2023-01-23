import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      jobs : true
    }
  }

  render() {
    return (
      <div id="Experience">
        <h1>Work Experience</h1>
        <p>Never worked!</p>
        <button>Edit</button>
      </div>
    );
  }
}

export default Experience;
