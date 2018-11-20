import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import './OptionsBar.css';
import { Collapse, Row, Col, Container, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//reactstrap
class OptionsBar extends Component {
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
      <div className="OptionsBar">
      <Container>
      <Row>
          <Col xs="3" sm="1">
          <button class="btn op-btn">
          <FontAwesomeIcon icon="hand-point-up" color = "#67a9cf" size="lg"/>
          </button>
          </Col>
          <Col xs="3" sm="1">
          <button class="btn op-btn">
          <FontAwesomeIcon icon="hand-point-down" color = "#ef8a62" size="lg"/>
          </button>
          </Col>
          <Col sm="3">
          <button className="btn op-btn" onClick={this.toggle}>
          <FontAwesomeIcon icon="comment" color = "#D3D3D3" size="lg"/>
          </button>
          </Col>
        </Row>
      </Container>
     <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Comment/>
              <Comment/>
            </CardBody>
          </Card>
        </Collapse>
     </div>
    );
  }
}

export default OptionsBar;