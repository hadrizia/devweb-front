import React, { Component } from 'react';
import './Report.css';
import UserPicture from '../../User/UserPicture';
import { Input, Row, FormGroup, Label } from 'reactstrap';


//reactstrap
class Report extends Component {
  
  constructor(props) {
    super(props);
    this.state = {content: '', isAnnonymous: false, user: ''}
  } 
  
  componentDidMount() {
    if (this.props.userLogged !== undefined){
      console.log('Report_a: ' + this.state.user.name);
      this.setState({user: this.props.userLogged});
    } else {
      console.log('Report_b: ' + this.state.user.name);
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
      
      <div className="Report">
      {console.log('Report_b: ' + this.state.user.name)}
     <div className="Report-Content">
     <p>No espaço abaixo você pode expressar o que seu coração está sentindo.</p>
     <div className="ReportForm">
     <form>
       <Input type="textarea" name="text" id="exampleText"/>
       <FormGroup check>
            <Label check>
              <Input type="radio" name="anonino" />{' '}
              Postar como Anônimo { this.state.user.name }
            </Label>
        </FormGroup>
     </form>
     </div>
     <Row>
        
     </Row>
     <Row>
       
     </Row>
    
   
    </div>
   </div>
    );
  }
}

export default Report;