import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">D&J Wedding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" class="navbar-nav ml-auto">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/weddingagenda">Wedding Agenda</Nav.Link>
              <NavDropdown id="about-the-couple-drop-down" title="About the Couple">
                <NavDropdown.Item href="/aboutDhruv">About Dhruv</NavDropdown.Item>
                <NavDropdown.Item href="/historyOfNathwani">Nathwani History</NavDropdown.Item>
                <NavDropdown.Item href="/aboutDhruv">Beans</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/aboutDhruv">More Beans</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="ceremony-drop-down" title="About the ceremonies">
                <NavDropdown.Item href="/aboutDhruv">About Dhruv</NavDropdown.Item>
                <NavDropdown.Item href="/historyOfNathwani">Nathwani History</NavDropdown.Item>
                <NavDropdown.Item href="/aboutDhruv">Beans</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/aboutDhruv">More Beans</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(Navigation);
