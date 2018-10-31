import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Timeline from './Timeline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Timeline/>
      </div>
    );
  }
}

export default App;
