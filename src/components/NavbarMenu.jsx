import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavbarMenu() {
  const openLogin = () => {};

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="navbar"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button
                className="primaryButton"
                onClick={openLogin}
                variant="danger"
              >
                Login
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
