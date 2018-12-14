import React, { Component } from 'react';
import Header from '../Header/Header';
import Timeline from '../Timeline/Timeline';
import './Dashboard.css';

// código para quando o npm start nao funcionar: CHOKIDAR_USEPOLLING=true npm start
class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
      <Header/>
      <Timeline/>
      </div>
    );
  }
}

export default Dashboard;
