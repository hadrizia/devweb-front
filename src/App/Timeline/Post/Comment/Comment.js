import React, { Component } from 'react';
import './Comment.css';
import UserPicture from '../../../User/UserPicture';
import { Row, Col } from 'reactstrap';

class Comment extends Component {
    render() {
        return (
          <div className="Comment">
            <Row>
              <Col xs="auto">
              <div className="UserPictureSmall"><UserPicture/>
              </div>
              </Col>
              <Col xs="10" style={{ marginLeft: -15 + "px" }}>
              <Row>
                <Col>
                <div>
                  Hadrizia Santos
                </div>
                </Col>
              </Row>
              <Row>
                <Col xs="auto" style={{ maxWidth: 100 + '%'}}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Col>
              </Row> 
              </Col>
            </Row>
          </div>
        );
      }
}

export default Comment;