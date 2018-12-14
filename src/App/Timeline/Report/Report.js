import React, { Component } from 'react';
import './Report.css';
import UserPicture from '../../User/UserPicture';
import { Input, Row, FormGroup, Label } from 'reactstrap';


//reactstrap
class Report extends Component {

  render() {
    return (
      <div className="Report">
     <div className="Report-Content">
     <p>No espaço abaixo você pode expressar o que seu coração está sentindo.</p>
     <Row>
     <input type="textarea" name="text" id="exampleText" />
     </Row>
     <Row>
     <input type="radio" name="radio" />{' '}
     </Row>
    
   
    </div>
   </div>
    );
  }
}

export default Report;