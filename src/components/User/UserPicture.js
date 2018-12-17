import React, { Component } from 'react';
import './UserPicture.css';

class UserPicture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserPicture">
      <img style={{borderRadius: 50 + '%'}} src={this.props.photo}/>
      </div>
    );
  }
}

export default UserPicture;