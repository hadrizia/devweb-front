import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import NewComment from '../Comment/NewComment';
import './OptionsBar.css';
import { Collapse, Row, Col, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../../../../api';

//reactstrap
class OptionsBar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false, comments: [], user: '', report: '' };
    this.addLike = this.addLike.bind(this);
    this.addDislike = this.addDislike.bind(this);
    this.toggle = this.toggle.bind(this);
  } 

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount(){
    if (this.props.user.name !== undefined){
      this.setState({user: this.props.user});
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
        console.log(this.state.user);
      }
    }

    if(this.props.report !== undefined) {
      this.setState({ report: this.props.report });
    }

    const url = '/reports/' + this.props.report._id + '/comments';
    console.log('USER' + this.state.user.token);
    API.get(url, {},{ headers: { 'Authorization': 'Bearer '+ this.state.user.token }
      }).then(response => {
          if (response.status === 200) {
            console.log('comments' + response.data);
            this.setState({comments: response.data});
          } else {
            localStorage.clear();
            window.location.replace('/');
          }
        }).catch(error => {
        console.log('Error: ');
        console.log(error);
      });
  };

  addLike(){
    if (this.state.report !== undefined){
      const url = '/reports/' + this.props.report._id + '/addLike'
      API.post(url, {},{ headers: { 'Authorization': 'Bearer '+ this.state.user.token }
      }).then(response => {
          if (response.status === 200) {
            this.setState({report: response.data});
          } else {
            localStorage.clear();
            window.location.replace('/');
          }
        }).catch(error => {
        console.log('Error: ');
        console.log(error);
      });
    }
  }


  addDislike(){
    if (this.state.report !== undefined){
      const url = '/reports/' + this.props.report._id + '/addDislike'
      API.post(url, {},{ headers: { 'Authorization': 'Bearer '+ this.state.user.token }
      }).then(response => {
          if (response.status === 200) {
            this.setState({report: response.data});
          } else {
            localStorage.clear();
            window.location.replace('/');
          }
        }).catch(error => {
        console.log('Error: ');
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div className="OptionsBar">
      <Row>
          <Col xs="3" sm="1">
          <button className="btn op-btn" onClick= {this.addLike}>
          <FontAwesomeIcon className="count" icon="hand-point-up" color = "#67a9cf" size="lg"/>
          {this.state.report.numLikes}
          </button>
          </Col>
          <Col xs="3" sm="1">
          <button className="btn op-btn" onClick= {this.addDislike}>
          <FontAwesomeIcon  className="count" icon="hand-point-down" color = "#ef8a62" size="lg"/>
          {this.state.report.numDislikes}
          </button>
          </Col>
          <Col sm="3">
          <button className="btn op-btn" onClick={this.toggle}>
          <FontAwesomeIcon icon="comment" color = "#D3D3D3" size="lg"/>
          </button>
          </Col>
        </Row>
        <div className="Collapsed">
     <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <NewComment/>
              {console.log('aaaaaaaaaaaaaaa'+this.state.comments.content) }

              {/* { this.state.comments.map(comment => 
                <Comment comment= { comment }/>) 
              } */}
            </CardBody>
          </Card>
        </Collapse>
        </div>
     </div>
    );
  }
}

export default OptionsBar;