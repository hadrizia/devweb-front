import React, { Component } from 'react';
import Post from './Post/Post';
import './Timeline.css';

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    );
  }
}

export default Timeline;
