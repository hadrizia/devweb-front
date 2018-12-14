import React, { Component } from 'react';
import Header from '../Header/Header';
import Timeline from '../Timeline/Timeline';
import './Dashboard.css';
import API from "../../api";

// código para quando o npm start nao funcionar: CHOKIDAR_USEPOLLING=true npm start
class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = { user: '' };
  }

  componentDidMount() {
    if (this.props.userLogged._id !== null){
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
          photoURL: userObject.photoUrl
        }
        this.setState({ user: userJSON });
      }
    }
  }

  render() {
    return (
      <div className="Dashboard">
      <Timeline userLogged = { this.state.user }/>
      </div>
    );
  }
}

export default Dashboard;
