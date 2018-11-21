import React, { Component } from 'react';
import './UserPicture.css';

class UserPicture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserPicture">
      <img style={{borderRadius: 50 + '%'}} src="http://naonascipraseraoutra.com/static/media/hadri.0831062c.jpg"/>
      </div>
    );
  }
}

export default UserPicture;