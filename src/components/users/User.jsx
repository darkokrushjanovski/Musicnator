import React from "react";
import Picture from "../../assets/ughh.png";
import {
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={Picture} rounded />
      <Card.Body>
        <Card.Title className="text-center">
          {user.firstName} {user.lastName}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="fw-bold text-center">
          Email: {user.email}
        </ListGroupItem>
        <ListGroupItem className="fw-bold text-center">
          Contact number: {user.phoneNumber}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <div className="d-grid gap-2">
          <Button className="fs-6" as={Link} to={`/musician/${user.uuid}`}>
            Visit profile
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default User;
