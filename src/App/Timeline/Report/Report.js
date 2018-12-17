import React, { Component } from 'react';
import './Report.css';
import API from '../../../api';
import { Input, Row, Button } from 'reactstrap';


//reactstrap
class Report extends Component {
  
  constructor(props) {
    super(props);
    this.state = {content: '', isAnonymous: false, user: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
  
  
  componentDidMount() {
    if (this.props.userLogged.name !== undefined){
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
          photoURL: userObject.photoUrl,
          token: userObject.token
        }
        this.setState({ user: userJSON });
      }
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log( 'Name' +name + 'Value' + value);

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.user._id !== undefined && this.state.user.token !== undefined){
      const report = {
        content: this.state.content,
        isAnonymous: this.state.isAnonymous,
        userId: this.state.user._id
      }

      console.log(report);
  
      API.post('/reports', report, { headers: { 'Authorization': 'Bearer '+ this.state.user.token }
      }).then(response => {
          if (response.status === 200) {
            const { handlePosts } = this.props;
            console.log(response.data);
            const newPost = response.data;
            handlePosts(newPost);
          }
        }).catch(error => {
        console.log('Error: ');
        console.log(error);
      });
    }

  };
  

  render() {
    return (
      
      <div className="Report">
     <div className="Report-Content">
     <p>No espaço abaixo você pode expressar o que seu coração está sentindo em relação ao curso de Ciência da Computação da UFCG.</p>
     <div className="ReportForm">
     <form>
       <Input type="textarea" name="content" value={ this.state.content } onChange={this.handleInputChange}/>
       <div className="divInput">
         <input type="checkbox" name="isAnnonymous" onChange={this.handleInputChange} value={ this.state.isAnonymous }/> Postar Anonimamente
       </div>
       <Button color="info" type="submit" onClick= { this.handleSubmit }>Enviar</Button>
     </form>
     </div>  
    </div>
   </div>
    );
  }
}

export default Report;