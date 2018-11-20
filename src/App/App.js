import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header/Header';
import Timeline from './Timeline/Timeline';
import './App.css';

// código para quando o npm start nao funcionar: CHOKIDAR_USEPOLLING=true npm start
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
