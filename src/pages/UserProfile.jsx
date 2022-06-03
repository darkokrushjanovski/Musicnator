import React from "react";
import { useState, useEffect } from "react";
import { Container, Card, Row, Col, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Picture from "../assets/ughh.png";
import AudioPlayer from "../components/AudioPlayer";

function UserProfile() {
  const param = useParams();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(
      axios
        .get(`${process.env.REACT_APP_MUSICNATOR_API_URL}/users/${param.uuid}`)
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
    );
  }, [param]);

  const dateFormater = (createdAt) => {
    return new Date(createdAt).toLocaleDateString("en-GB");
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!loading) {
    return (
      <Container className="mt-5">
        <Card border="primary" className="g-col-6 border border-3">
          <Row>
            <Col sm={5} className="">
              <Image src={Picture} className="p-4 "></Image>
            </Col>

            <Col sm={7} className="ml-4 mt-2">
              <Card.Text text="primary" className="fw-bold fs-1 px-5">
                {user.firstName} {user.lastName}
              </Card.Text>
              <Card.Text className=" fw-bold fs-4 pt-4 px-5">
                Phone number: {user.phoneNumber}
              </Card.Text>
              <Card.Text className=" fw-bold fs-4 px-5">
                Email: {user.email}
              </Card.Text>

              <Card.Text className=" fw-bold fs-4 px-5">
                Joined at: {dateFormater(user.createdAt)}
              </Card.Text>
            </Col>
          </Row>

          <Row>
            <Col className="text-center fw-bold fs-3">
              User's uploaded tracks:
            </Col>
          </Row>

          <Row>
            <AudioPlayer user={user} key={user.uuid} />
          </Row>
        </Card>
      </Container>
    );
  }
}

export default UserProfile;
