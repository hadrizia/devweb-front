import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post/Post';
import './Timeline.css';

class Timeline extends Component {

  state = {
      reports: []
  }
  
  componentDidMount() {
    axios.get(`http://localhost:8080/reports`)
      .then(res => {
        const reports = res.data.reports
        this.setState({reports});
      })
  }

  render() {
    return (
      <div className="Timeline">
      { this.state.reports.map(report => 
      <Post value={report} />)}
      </div>
    );
  }
}

export default Timeline;
