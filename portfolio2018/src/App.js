import React, { Component } from 'react';
import Landing from './components/landing';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
