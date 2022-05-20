import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";

function NavbarMenu() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="primary"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link>About</Nav.Link>
            <NavDropdown title="Musicians" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/musicians/all">
                All Musicians
              </NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {!localStorage.getItem("token") ? (
            <Nav>
              <Nav.Link as={Link} to="/login">
                <Button className="primaryButton" variant="danger">
                  Login
                </Button>{" "}
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Button as={Link} to="/upload">
                  <BsPlusSquare size={26} title="Upload your track" />
                </Button>
                <Button as={Link} to="/profile/asd" title="Your profile">
                  <AiOutlineUser size={26} />
                </Button>
                <Button
                  onClick={logOut}
                  className="primaryButton"
                  variant="danger"
                >
                  Log out
                </Button>{" "}
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
