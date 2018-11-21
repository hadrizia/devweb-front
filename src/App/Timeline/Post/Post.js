import React, { Component } from 'react';
import './Post.css';
import OptionsBar from './OptionsBar/OptionsBar';
import UserPicture from '../../User/UserPicture';
import { Row, Col } from 'reactstrap';


//reactstrap
class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Post">
       <Row>
         <Col xs="auto">
           <div className="UserPictureMedium"><UserPicture/>
           </div>
          </Col>
          <Col xs="10" style={{ marginLeft: -15 + "px", marginTop: 10 + "px" }}>
            <div>
              Hadrizia Santos
            </div>
          </Col>
        </Row>
      <hr/>
      <div className="Post-Content">
      <p>sing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
     </div>
     <hr/>
     <OptionsBar></OptionsBar>
    </div>
    );
  }
}

export default Post;