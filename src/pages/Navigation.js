import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../images/grape-logo.PNG";

const Navigation = () => {
  return (
    <Navbar className="navbar-css" bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Grape
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>

          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/notespage">Notes</NavDropdown.Item>

            <NavDropdown.Item href="/create">
              Create MongoDB Record
            </NavDropdown.Item>

            <NavDropdown.Item href="/recordsList">
              View MongoDB Records
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
