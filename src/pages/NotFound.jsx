import { Card, Container, Row, Col } from "react-bootstrap";
import Error from "../assets/Error.png";

function NotFound() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={Error} height={500} />
              <Card.Body>
                <Card.Title className="display-1 text-center">404</Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Title className="display-4 text-center">
                  Not Found
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;
