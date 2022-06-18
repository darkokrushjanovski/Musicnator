import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  Carousel,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import firstPicture from "../assets/logoPicture.png";
import secondPicture from "../assets/secondPicture.jpg";
import thirdPicture from "../assets/thirdPicture.jpg";
import axios from "axios";
import User from "../components/users/User";

function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const onFilter = () => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.firstName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_MUSICNATOR_API_URL}/users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUsers(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <Container className="p-4">
      <Card border="primary" className="p-4 border border-3">
        <Carousel style={{ position: "relative" }} variant="dark" slide>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={firstPicture}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Welcome to Musicnator</h1>
              <p className="fs-4">
                The biggest database for the most talented musicians
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 "
              src={secondPicture}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="text-light">Join thousands of musicians!</h1>
              <p className="fs-4 text-light">
                Communicate with thousands of musicians all across the globe
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={thirdPicture}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="text-shadow">Share your own music</h1>
              <p className="fs-4 text-light">
                Share your personal tracks so others can see how talented you
                are!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Title className="text-center fs-4 fw-bold mt-4">
          Search for musicians:
        </Card.Title>

        <Form.Control
          type="text"
          size="lg"
          placeholder="Enter musician name"
          className="border border-4"
          value={searchTerm}
          onChange={onChange}
          required
          minLength="4"
          maxLength="8"
        ></Form.Control>
        {searchTerm.length < 3 && (
          <Alert className="mt-3 p-1 rounded" variant="warning">
            Please insert at least 3 characters!
          </Alert>
        )}
        <Row>
          <Col>
            <div className="d-grid gap-2">
              <Button
                onClick={onFilter}
                className="mt-3"
                disabled={searchTerm.length < 3}
              >
                Search
              </Button>
            </div>
          </Col>

          <Col>
            <div className="d-grid gap-2">
              <Button
                onClick={() => {
                  setFilteredUsers("");
                  setSearchTerm("");
                }}
                className="mt-3 d-grid gap-2"
                variant="danger"
              >
                Clear
              </Button>
            </div>
          </Col>
        </Row>

        {filteredUsers.length > 0 && (
          <Container fluid>
            <Card border="primary" className="m-4 border border-3 p-4 ">
              <Row>
                {loading &&
                  filteredUsers.map((user) => (
                    <Col lg={3} md={4} sm={6} xs={12} key={user.uuid}>
                      <User user={user} />
                    </Col>
                  ))}
              </Row>
            </Card>
          </Container>
        )}
      </Card>
    </Container>
  );
}

export default Home;
