import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post/Post';
import './Timeline.css';
import Report from './Report/Report';

class Timeline extends Component {

  state = {
      reports: []
  }
  
  componentDidMount() {
    axios.get(`http://localhost:8000/reports`)
      .then(res => {
        const reports = res.data.reports
        this.setState({reports});
      })
  }
  

  render() {
    return (
      <div className="Timeline">
      <Report />
      { this.state.reports.map(report => 
      <Post report={report}/>)}
      </div>
    );
  }
}

export default Timeline;
