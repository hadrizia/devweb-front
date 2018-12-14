import React, { Component } from 'react';
import SignUpForm from './SignUpForm/SignUpForm';
import SignInForm from './SignInForm/SignInForm';
import { Button, Row, Col } from 'reactstrap';

import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
        };
        this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ signUp: !this.state.signUp });
  }
  

  handleLogin = loggedUser => {
    const { handleLogin } = this.props;
    console.log(this.props);
    handleLogin(loggedUser);
  }

  render() {
    return (
     
    <div className="Login">
    
    <Col>
      <Row>
      { (this.state.signUp) ? <SignUpForm onSignUp={ this.handleLogin } /> : <SignInForm onLogged={ this.handleLogin }/>}
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
