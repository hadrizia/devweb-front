import React, { Component } from 'react';
import Header from './Header/Header';
import Login from './Login/Login';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// código para quando o npm start nao funcionar: CHOKIDAR_USEPOLLING=true npm start
class App extends Component {


  render() {
    return (
      <div className="App">
      <Header/>
      <Login />   
      </div>
    );
  }
}

export default App;
