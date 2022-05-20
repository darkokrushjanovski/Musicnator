import { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UploadForm() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body className="mt-2">
                <Card.Title>Share your track with others!</Card.Title>
              </Card.Body>

              <Card.Body className="mt-2">
                <Form>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className="fw-bold uploadFormText ">
                      Upload your audio track
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>

                  <Form.Group>
                    {["radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`default ${type}`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UploadForm;
