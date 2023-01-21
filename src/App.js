import React, { Component } from 'react';
import Personal from "./components/Personal"
import Education from "./components/Education"
import Experience from "./components/Experience"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Personal />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
