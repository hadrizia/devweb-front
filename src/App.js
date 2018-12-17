import React, { Component } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

// código para quando o npm start nao funcionar: CHOKIDAR_USEPOLLING=true npm start
class App extends Component {

  constructor(props) {
    super(props);	    
    this.state = { userLogged: false, user: '' };
    this.handleLogin = this.handleLogin.bind(this);
  }	 

  componentDidMount() {
    const statusUser = localStorage.getItem('userLogged');
     if (statusUser === null) {
      this.setState({ userLogged: false, user: '' });
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
      this.setState({ userLogged: true, user: userJSON });
    }
  }

   handleLogin = loggedUser => {
     if(loggedUser._id != null) {
      this.setState({ userLogged: true, user: loggedUser });
     } else {
      this.setState({ userLogged: false, user: '' });
     }
     localStorage.setItem('userLogged', JSON.stringify(loggedUser));
  };	 


  render() {
    return (
      <div className="App">
      <Header user= { this.state.user }/>
      { this.state.userLogged === true ? <Dashboard userLogged={ this.state.user }/> :  <Login userLogged={ this.state.userLogged } handleLogin={ this.handleLogin }/> }
      </div>
    );
  }
}

export default App;
