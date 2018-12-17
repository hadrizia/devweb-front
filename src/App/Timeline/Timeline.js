import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post/Post';
import './Timeline.css';
import Report from './Report/Report';
import API from '../../api';

class Timeline extends Component {
  
  constructor(props) {
    super(props);	    
    this.state = { reports: [], user: '' };
  }	 
  
  componentDidMount() {
    if (this.props.userLogged._id !== undefined){
      this.setState({user: this.props.userLogged});
    } else {
     const statusUser = localStorage.getItem('userLogged');
     if (statusUser === null) {
        this.setState({ user: '' });
      } else {
        const userObject = JSON.parse(statusUser);
        const userJSON = {
          _id: userObject._id,
          name: userObject.name,
          email: userObject.email,
          username: userObject.username,
          photoURL: userObject.photoUrl,
          token: userObject.token
        }
        this.setState({ user: userJSON });
      }
    }

    API.get('/reports')
      .then(response => {
        if (response.status === 200) {
          const reportsList = response.data.reports;
          this.setState({reports: reportsList});
        }
      }).catch(error => {
      console.log('Error: ');
      console.log(error);
    })    
  };

  handlePosts = newPost => {
    if(newPost != undefined) {
      const reports = this.state.reports;
      reports.push(newPost);
     this.setState({ reports: reports });
    }else{
      API.get('/reports')
      .then(response => {
        if (response.status === 200) {
          const reportsList = response.data.reports;
          this.setState({reports: reportsList});
        }
      }).catch(error => {
      console.log('Error: ');
      console.log(error);
      });   
    }
 };	 
  

  render() {
    return (
      <div className="Timeline">
      <Report userLogged = { this.state.user } handlePosts={ this.handlePosts }/>
      { this.state.reports.map(report => 
      <Post userLogged = { this.state.user } report={report}/>)}
      </div>
    );
  }
}

export default Timeline;
