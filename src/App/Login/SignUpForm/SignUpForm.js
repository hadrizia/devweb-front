import React, { Component } from 'react';
import './SignUpForm.css';
import { Button, Row, Col, Input, Label } from 'reactstrap';

class SignUp extends Component {

  render() {
    return (
      <Col>
      <Row>
      <div className="Login-Content">
      <form>
          <Input type="text" name="nome" placeholder="Nome" bsSize="sm"/> 
          <Input type="email" name="email" placeholder="Email" bsSize="sm"/>
          <Input type="text" name="username" placeholder="Username" bsSize="sm"/> 
          <Input type="password" name="password" placeholder="Password" bsSize="sm"/>
          <label>Data de nascimento</label>
          <Input type="date" name="birth" placeholder="Data de Nascimento" bsSize="sm"/>
          <label>Foto do perfil</label>
          <Input type="file" name="photoURL" bsSize="sm"/>
       </form>
      </div>
      </Row>
      <Row>
      <br/>
        <Button id="Signup-button">Sign Up</Button>
      </Row>
      </Col> 
    );
  }
}

export default SignUp;
