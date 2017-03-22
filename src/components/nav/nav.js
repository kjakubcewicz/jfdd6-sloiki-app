import React from 'react'
import {Navbar, Nav, NavItem,} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'
import './nav.css'

import LogUserOut from '../logout'

const NavComponent = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/img/pozyczme-logo-blue2.svg'}
               alt="Logo PożyczME"/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle  />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/games-list">
          <NavItem eventKey={1}>Lista gier</NavItem>
        </LinkContainer>
        <LinkContainer to="/users-list">
          <NavItem eventKey={2}>Użytkownicy</NavItem>
        </LinkContainer>
        <LinkContainer to="/map">
          <NavItem eventKey={3}>Map</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={4}>Zaloguj się</NavItem>
        </LinkContainer>
        <LogUserOut/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)

export default NavComponent


