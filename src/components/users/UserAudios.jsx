import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Card, Row, Col, Image, Container } from "react-bootstrap";

function UserAudios({ audio }) {
  return (
    <Container fluid>
      <hr className="half-rule" />
      <Card.Title className="text-center fs-5 fw-bold">
        {audio.title}
      </Card.Title>
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
            <Card.Body className="border border-2 m-2">
              {audio.description}
            </Card.Body>
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
