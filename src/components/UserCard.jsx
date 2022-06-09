import React from "react";
import { Col, Row, Card, Image, Container } from "react-bootstrap";
import Picture from "../assets/ughh.png";

function UserCard({ user }) {
  const phoneNumber = user.phoneNumber;
  const lastName = user.lastName;
  const firstName = user.firstName;
  const email = user.email;

  return (
    <Card border="primary" className="g-col-6 border border-3">
      <Row>
        <Col sm={5} className="">
          <Image src={Picture} className="p-4 "></Image>
        </Col>

        <Col sm={7} className="ml-4 mt-2">
          <Card.Text text="primary" className="fw-bold fs-1 px-5">
            {firstName} {lastName}
          </Card.Text>
          <Card.Text className=" fw-bold fs-4 pt-4 px-5">
            Phone number: {phoneNumber}
          </Card.Text>
          <Card.Text className=" fw-bold fs-4 ">Email: {email}</Card.Text>
        </Col>
      </Row>

      <Row>
        <Col className="text-center fw-bold fs-3">User's uploaded tracks:</Col>{" "}
      </Row>
    </Card>
  );
}

export default UserCard;
