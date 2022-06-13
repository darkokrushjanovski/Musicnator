import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";

function Category() {
  const [audios, setAudios] = useState();
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_MUSICNATOR_API_URL}/audios/categories/${params.category}`
      )
      .then((response) => {
        setAudios(response.data);
        setLoading(true);
      });
  }, [params]);

  return (
    <Container>
      <Card.Title className="text-center mt-4 fs-1 ">
        All {params.category} audios{" "}
      </Card.Title>
      <Card border="primary" className="p-4 mt-5 border border-2">
        {loading &&
          audios.map((audio) => (
            <Card border="primary" key={audio.uuid} className="m-3">
              <Row>
                <div>
                  <Card.Text className="text-center fs-4">
                    {audio.title}
                  </Card.Text>
                </div>
              </Row>
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
                <Col lg={1}>
                  <Card.Text>Audio by:</Card.Text>
                </Col>
                <Col>
                  <Card.Link
                    as={Link}
                    to={`/musician/${audio.user.uuid}`}
                    className="mr-2"
                  >
                    {audio.user.firstName} {audio.user.lastName}
                  </Card.Link>
                </Col>
              </Row>
            </Card>
          ))}
      </Card>
    </Container>
  );
}
export default Category;
