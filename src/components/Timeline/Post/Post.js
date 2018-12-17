import React, { Component } from 'react';
import './Post.css';
import OptionsBar from './OptionsBar/OptionsBar';
import UserPicture from '../../User/UserPicture';
import { Row, Col } from 'reactstrap';


//reactstrap
class Post extends Component {
  constructor(props) {
    super(props);
    this.state= {user: ''}
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
  }

  render() {
    return (
      <div className="Post">
      <Row>
        <Col xs="auto">
          <div className="UserPictureMedium">
          <div className="UserPicture">
           <UserPicture photo = { this.props.report.isAnonymous ? "https://feedback.seekingalpha.com/s/cache/85/82/8582a8f2f9bf432ed6ad7c68abb2f3be.png" :  this.props.report.user.photo }/> 
          </div>
          </div>
         </Col>
         <Col xs="10" style={{ marginLeft: -15 + "px", marginTop: 10 + "px" }}>
           <div>
             { this.props.report.isAnonymous ? 'Usuário anônimo' :  this.props.report.user.name}
           </div>
           <div className="createdDate">
           {new Date(this.props.report.createdDate).toLocaleDateString()}
           </div>
         </Col>
       </Row>
     <hr/>
     <div className="Post-Content">
     <p>{ this.props.report.content}</p>
    </div>
    <hr/>
    <OptionsBar report={ this.props.report } user={ this.state.user }></OptionsBar>
   </div>
    );
  }
}

export default Post;