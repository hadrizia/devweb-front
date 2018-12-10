import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import NewComment from '../Comment/NewComment';
import './OptionsBar.css';
import { Collapse, Row, Col, CardBody, Card } from 'reactstrap';
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
      <Row>
          <Col xs="3" sm="1">
          <button className="btn op-btn">
          <FontAwesomeIcon className="count" icon="hand-point-up" color = "#67a9cf" size="lg"/>
          {this.props.report.numLikes}
          </button>
          </Col>
          <Col xs="3" sm="1">
          <button className="btn op-btn">
          <FontAwesomeIcon  className="count" icon="hand-point-down" color = "#ef8a62" size="lg"/>
          {this.props.report.numDislikes}
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
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
            </CardBody>
          </Card>
        </Collapse>
        </div>
     </div>
    );
  }
}

export default OptionsBar;