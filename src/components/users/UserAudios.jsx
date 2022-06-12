import React from "react";

import ReactAudioPlayer from "react-audio-player";
import { Card, Row, Col, Image, Container, Badge } from "react-bootstrap";

function UserAudios({ audio }) {
  return (
    <Container fluid>
      <hr className="half-rule" />
      <Row>
        <Col>
          <Card.Title className="text-center fs-5 fw-bold">
            <span className="me-3">{audio.title}</span>

            {audio.categories.map((category) => (
              <Badge
                size="sm"
                pill
                bg="danger"
                className="me-3"
                key={category.uuid}
              >
                {category.name}
              </Badge>
            ))}
          </Card.Title>
        </Col>
      </Row>
      <Card border="primary" className=" border border-2 p-auto m-auto">
        <Row>
          <Col xs={6} md={4} lg={3} className="m-1">
            <Image
              width="90%"
              height="auto"
              src={`${process.env.REACT_APP_MUSICNATOR_API_URL}/uploads/${audio.imageResourceUuid}`}
            ></Image>
          </Col>
          <Col>
            <Card border="primary" className="m-2 border border-2">
              <Card.Body className=" m-2">{audio.description}</Card.Body>
            </Card>
            <ReactAudioPlayer
              src={`${process.env.REACT_APP_MUSICNATOR_API_URL}/uploads/${audio.audioResourceUuid}`}
              controls
              className="w-100 "
            />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Card>
    </Container>
  );
}

export default UserAudios;
