import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

export const NavBar = () => (
  <div className="navbar-area">
    <Container>
      <Row>
        <Col lg="12">
          <Navbar expand="lg">
            <Navbar.Toggle
              aria-controls="nav"
              className="border-top-0 ml-auto"
            />
            <Navbar.Collapse id="nav">
              <Nav.Link className="nav-item">WHITEPAPER</Nav.Link>
              <Nav.Link className="nav-item">DOWNLOAND</Nav.Link>
              <Nav.Link className="nav-item">TOKEN</Nav.Link>
              <Nav.Link className="nav-item">MARKETPLACE</Nav.Link>
              <Nav.Link className="nav-item">SIGN IN</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </div>
);

export default NavBar;