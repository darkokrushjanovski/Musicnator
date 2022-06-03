import { useState, useEffect } from "react";
import { Col, Row, Form, Button, Card, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      toast.success("Already logged in", {
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

  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_MUSICNATOR_API_URL}/auth/login`, formData)
      .then(function (response) {
        // handle success
        localStorage.setItem("token", response.data.accessToken);

        navigate("/");

        toast.success("Login successful", {
          position: "top-center",
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

        toast.error("Wrong credentials", {
          position: "top-center",
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
          <Col md={{ span: 8, offset: 2 }}>
            <Card border="primary" className="border border-5">
              <Card.Body>
                <Card.Title>Login with your Musicnator account</Card.Title>
              </Card.Body>

              <Card.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={onChange}
                      id="email"
                      value={email}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={onChange}
                      id="password"
                      value={password}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>

                <Form.Group className="mt-2">
                  <Form.Label className="registerText" as={Link} to="/register">
                    Not registered? Click here to register!
                  </Form.Label>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
