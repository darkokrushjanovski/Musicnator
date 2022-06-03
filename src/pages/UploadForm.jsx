import { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Form, Row, Col, Card, Container, Button } from "react-bootstrap";
import axios from "axios";
import "react-bootstrap-typeahead/css/Typeahead.css";

function UploadForm() {
  const [multiSelections, setMultiSelections] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(multiSelections);
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_MUSICNATOR_API_URL}/categories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCategories(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="main">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body className="mt-2">
                <Card.Title>Share your track with others!</Card.Title>
              </Card.Body>

              <Card.Body className="mt-2">
                <Form onSubmit={onSubmit}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className="fw-bold uploadFormText ">
                      Upload your audio track
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>

                  <Form.Group style={{ marginTop: "20px" }}>
                    <Form.Label>Multiple Selections</Form.Label>
                    <Typeahead
                      id="basic-typeahead-multiple"
                      labelKey="name"
                      multiple
                      onChange={setMultiSelections}
                      options={categories}
                      placeholder="Choose categories"
                      selected={multiSelections}
                    />

                    <Button variant="primary" type="submit" className="mt-3">
                      Test
                    </Button>
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
