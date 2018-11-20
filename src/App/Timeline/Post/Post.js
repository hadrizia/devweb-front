import React, { Component } from 'react';
import './Post.css';
import OptionsBar from './OptionsBar/OptionsBar';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//reactstrap
class Post extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return (
      <div className="Post">
      <div>Foto</div>
      <div>Nome</div>
      <hr/>
      <div className="Post-Content">
      <p>sing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
     </div>
     <hr style={{marginBottom: 0 +'px'}}/>
     <OptionsBar></OptionsBar>
    </div>
    );
  }
}

export default Post;