import React, { Component } from 'react';
import './Header.css';
//reactstrap
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-App">
        <h1>PocPoc</h1>
        </header>
      </div>
    );
  }
}

export default Header;