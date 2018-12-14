import React, { Component } from 'react';
import axios from 'axios';
import SignUpForm from './SignUpForm/SignUpForm';
import SignInForm from './SignInForm/SignInForm';
import { Button, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';


import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            signUp: false
          };
    }
      
    toggle() {
        this.setState({
            signUp: !this.state.signUp
        });
    }
  
  componentDidMount() {
    // axios.get(`http://localhost:8000/reports`)
    //   .then(res => {
    //     const reports = res.data.reports
    //     this.setState({reports});
    //   })
  }
  

  render() {
    return (
     
    <div className="Login">
    
    <Col>
      <Row>
      { (this.state.signUp) ? <SignUpForm/> : <SignInForm/>}
      </Row>
      <Row>
          <Col>
          <button className="btn-link" onClick = { this.toggle }><u>{ (this.state.signUp) ? 'Sign In' : 'Sign Up'}</u></button>
          </Col>
      </Row>
      </Col>
    </div> 
    );
  }
}

export default Login;
