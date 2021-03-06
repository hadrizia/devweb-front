import React, { Component } from 'react';
import './SignUpForm.css';
import { Button, Row, Col } from 'reactstrap';
import API from '../../../api';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = { name:'', email: '', username: '', password: '', photoURL: '', birth: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      username: this.state.username.trim(),
      password: this.state.password,
      photoURL: this.state.photoURL.trim(),
      birth: this.state.birth
    };

    console.log(user);
    API.post('/users', user)
      .then(response => {
        if (response.status === 201) {
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
      <p>Sign Up</p>
      <Row>
      <div className="Login-Content">
      <form>
          <input type="text" placeholder="Nome"  name="name" value={ this.state.name } onChange={ this.handleInputChange }/> 
          <input type="email" placeholder="Email" name="email" value={ this.state.email } onChange={ this.handleInputChange }/>
          <input type="text" placeholder="Username" name="username" value={ this.state.username } onChange={ this.handleInputChange }/> 
          <input type="password" placeholder="Password" name="password" value={ this.state.password } onChange={ this.handleInputChange }/>
          <input type="text" placeholder="Profile URL" name="photoURL" value={ this.state.photoURL } onChange={ this.handleInputChange }/>
          <label>Birth</label>
          <input type="date" placeholder="Data de Nascimento" name="birth" value={ this.state.birth } onChange={ this.handleInputChange }/>
       </form>
      </div>
      </Row>
      <Row>
      <br/>
        <Button id="Signup-button" type="submit" onClick={ this.handleSubmit }>Sign Up</Button>
      </Row>
      </Col> 
    );
  }
}

export default SignUp;
