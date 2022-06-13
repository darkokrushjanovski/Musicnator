import { Card, Container, Col, Button, Image } from "react-bootstrap";
import Error from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  return (
    <Container className="text-center mt-10">
      <Image fluid src={Error}></Image>
      <Card.Title className="fs-1 fw-bold text-center">
        Oops... Page not found
      </Card.Title>
      <Col className="text-center ">
        <Button className="mt-2" onClick={onClick}>
          Go back to homepage
        </Button>
      </Col>
    </Container>
  );
}

export default NotFound;
