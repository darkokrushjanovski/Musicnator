import React from "react";
import { useState, useEffect, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import HomeUsers from "../components/users/HomeUsers";

function Home() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_MUSICNATOR_API_URL}/users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUsers(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container fluid className="p-4 ">
      <Card border="primary" className="p-4 border border-3">
        <Row>
          <Col className="m-3">
            <Slider style={{ width: "25rem" }} {...settings}>
              {loading &&
                users.map((user) => <HomeUsers user={user} key={user.uuid} />)}
            </Slider>
          </Col>
          <Col></Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Home;
