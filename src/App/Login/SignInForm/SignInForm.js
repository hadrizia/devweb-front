import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

import './SignInForm.css';
import API from "../../../api";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: this.state.email.trim(),
      password: this.state.password,
    };

    API.post('/auth/login', user)
      .then(response => {
        if (response.status === 200) {
          const { onLogged } = this.props;
          onLogged(response.data.user);
        }
      }).catch(error => {
      console.log('Error: ');
      console.log(error);
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  

  render() {
    return (
        <Col>
        <p>Login</p>
        <Row>
        <div className="Login-Content">
        <form className="Form-SignIN">
            <input type="email" name="email" id="exampleEmail" placeholder="Login" onChange={ this.handleInputChange } value={ this.state.email }/>
            <hr style={{ marginTop: -8 + "px", marginBottom: -2 + "px" }}/>
            <input type="password" name="password" id="examplePassword" placeholder="Password" onChange={ this.handleInputChange } value={ this.state.password }/>
         </form>
        </div>
        </Row>
        <Row>
        <br/>
          <Button id="Login-button" type='submit' onClick={this.handleSubmit}>Sign In</Button>
        </Row>
        </Col> 
    );
  }
}

export default SignInForm;
