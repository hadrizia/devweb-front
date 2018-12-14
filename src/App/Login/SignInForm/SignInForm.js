import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

import './SignInForm.css';

class SignInForm extends Component {
  
  componentDidMount() {
    // axios.get(`http://localhost:8000/reports`)
    //   .then(res => {
    //     const reports = res.data.reports
    //     this.setState({reports});
    //   })
  }
  

  render() {
    return (
        <Col>
        <Row>
        <div className="Login-Content">
        <form class="Form-SignIN">
            <input type="email" name="email" id="exampleEmail" placeholder="Login" />
            <hr style={{ marginTop: -8 + "px", marginBottom: -2 + "px" }}/>
            <input type="password" name="password" id="examplePassword" placeholder="Password" />
         </form>
        </div>
        </Row>
        <Row>
        <br/>
          <Button id="Login-button">Sign In</Button>
        </Row>
        </Col> 
    );
  }
}

export default SignInForm;
