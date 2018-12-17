import React from 'react';
import './Header.css'; 
import { Badge } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../../api';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = () => {
    API.get('/auth/logout')
      .then(response => {
        if (response.status === 200) {
          localStorage.clear();
          window.location.replace('/');
        }
      });
  }

  render() {
    return (
      <div className="Header">
        <Navbar expand="md" color="light" light>
          <NavbarBrand href="/">Bugs-CC</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem active className="NavItem">
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="NavItemName" nav caret>
                  { this.props.user.name }
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={ this.logout }>
                    Sair
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}