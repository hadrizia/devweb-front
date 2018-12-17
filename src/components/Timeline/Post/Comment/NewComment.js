import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//reactstrap
class NewComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NewComment">
        <InputGroup size="sm">
            <Input placeholder="Deixe um comentário."/>
            <InputGroupAddon addonType="append">
              <Button style={{backgroundColor: "#EA736F"}}><FontAwesomeIcon icon="comment" color = "white"/></Button>
            </InputGroupAddon>
        </InputGroup>
        </div>
    );
  }
}

export default NewComment;