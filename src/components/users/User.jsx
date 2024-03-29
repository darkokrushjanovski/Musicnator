import React from "react";
import { Button, Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <Card border="primary" className="m-2 p-2 border border-2 ">
      <Image
        src={`${process.env.REACT_APP_MUSICNATOR_API_URL}/uploads/${user.imageResourceUuid}`}
      />
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
