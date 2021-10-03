import { 
  ABOUT_DHRUV_PATH,
  ABOUT_JORDAN_PATH,
  CUSTOM_RITUALS_PATH,
  HISTORY_OF_BUTCHES_PATH,
  HISTORY_OF_NATHWANI_PATH,
  HOME_PATH,
  HOW_DHRUV_MET_JORDAN_PATH,
  MENDHI_PATH,
  MUSIC_PATH,
  PROPOSAL_PATH,
  WEDDING_AGEDNA_PATH,
} from "./../routes";
import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">D&J Wedding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" class="navbar-nav ml-auto">
            <Nav className="me-auto">
              <Nav.Link href="https://www.theknot.com/us/jordan-buches-and-dhruv-nathwani-oct-2021" target="_blank">The Knot</Nav.Link>
              <Nav.Link href={WEDDING_AGEDNA_PATH}>Wedding Agenda</Nav.Link>
              <NavDropdown id="about-the-couple-drop-down" title="About the Couple">
                <NavDropdown.Item href={ABOUT_JORDAN_PATH}>About Jordan</NavDropdown.Item>
                <NavDropdown.Item href={ABOUT_DHRUV_PATH}>About Dhruv</NavDropdown.Item>
                <NavDropdown.Item href="https://www.theknot.com/us/jordan-buches-and-dhruv-nathwani-oct-2021/our-story" target="_blank">The Couple&apos;s Story</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={HISTORY_OF_BUTCHES_PATH}>Butches History</NavDropdown.Item>
                <NavDropdown.Item href={HISTORY_OF_NATHWANI_PATH}>Nathwani History</NavDropdown.Item>                
              </NavDropdown>
              <NavDropdown id="ceremony-drop-down" title="About the ceremonies">
                <NavDropdown.Item href={MENDHI_PATH}>Wedding Preparation</NavDropdown.Item>
                <NavDropdown.Item href={CUSTOM_RITUALS_PATH}>Wedding Day</NavDropdown.Item>
                <NavDropdown.Item href={MUSIC_PATH}>About the Music Selection</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(Navigation);
