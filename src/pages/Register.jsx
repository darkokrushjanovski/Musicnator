import { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      toast.success("Cannot register while logged in", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      navigate("/");
      console.log("asd");
    }
  }, [navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { firstName, lastName, password, email, phoneNumber } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_MUSICNATOR_API_URL}/register`, formData)
      .then(function (response) {
        // handle success
        console.log(response);
        // localStorage.setItem("token", response.data.accessToken);
        navigate("/login");
        toast.success("Register successful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .catch(function (error) {
        // handle error
        toast.error("Email already registered", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <div className="main">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card border="primary" className="border border-5">
              <Card.Body className="mt-2">
                <Card.Title>Create your Musicnator account!</Card.Title>
              </Card.Body>

              <Card.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={onChange}
                      id="firstName"
                      value={firstName}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={onChange}
                      id="lastName"
                      value={lastName}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                      type="Email"
                      placeholder="Email"
                      onChange={onChange}
                      id="email"
                      value={email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={onChange}
                      id="password"
                      value={password}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Phone number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Phone number"
                      onChange={onChange}
                      id="phoneNumber"
                      value={phoneNumber}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
