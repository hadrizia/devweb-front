import React, { Component } from 'react';
import Post from './Post';
import './Timeline.css';

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
        <h1>Timeline</h1>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    );
  }
}

export default Timeline;
