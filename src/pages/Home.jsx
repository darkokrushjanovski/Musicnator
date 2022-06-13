import React from "react";
import { Card, Container, Form, Button, Carousel } from "react-bootstrap";
import firstPicture from "../assets/logoPicture.png";
import secondPicture from "../assets/secondPicture.jpg";
import thirdPicture from "../assets/thirdPicture.jpg";

function Home() {
  return (
    <Container className="p-4">
      <Card border="primary" className="p-4 border border-3">
        <Carousel style={{ position: "relative" }} variant="dark" slide>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={firstPicture}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Welcome to Musicnator</h1>
              <p className="fs-4">
                The biggest database for the most talented musicians
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 "
              src={secondPicture}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="text-light">Join thousands of musicians!</h1>
              <p className="fs-4 text-light">
                Communicate with thousands of musicians all across the globe
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={thirdPicture}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="text-shadow">Share your own music</h1>
              <p className="fs-4 text-light">
                Share your personal tracks so others can see how talented you
                are!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Title className="text-center fs-4 fw-bold mt-4">
          Search for musicians:
        </Card.Title>

        <Form.Control
          type="text"
          size="lg"
          placeholder="Enter musician name"
          className="border border-4"
        ></Form.Control>
        <Button className="mt-3">search</Button>
      </Card>
    </Container>
  );
}

export default Home;
