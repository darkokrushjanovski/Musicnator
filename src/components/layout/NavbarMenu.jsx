import { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import axios from "axios";

function NavbarMenu() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    getCategories();
  }, []);

  const redirectToCurrentUser = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_MUSICNATOR_API_URL}/users/activeUser`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          navigate(`musician/${res.data.uuid}`);
        });
    } catch (err) {}
  };

  const getCategories = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_MUSICNATOR_API_URL}/categories`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setCategories(res.data);
          setLoading(true);
        });
    } catch (err) {}
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

            <Nav.Link as={Link} to="/musicians/all">
              Musicians
            </Nav.Link>

            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              {loading &&
                categories.map((category) => (
                  <NavDropdown.Item
                    as={Link}
                    to={`/category/${category.name}`}
                    key={category.uuid}
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))}
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
              <Button as={Link} to="/upload">
                <BsPlusSquare size={26} title="Upload your track" />
              </Button>
              <Button title="Your profile" onClick={redirectToCurrentUser}>
                <AiOutlineUser size={26} />
              </Button>
              <Button
                onClick={logOut}
                className="primaryButton"
                variant="danger"
              >
                Log out
              </Button>{" "}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
