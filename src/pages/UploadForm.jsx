import { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Form, Row, Col, Card, Container, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import "react-bootstrap-typeahead/css/Typeahead.css";

function UploadForm() {
  const [multiSelections, setMultiSelections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [audio, setAudio] = useState(null);
  const [picture, setPicture] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    audioResourceUuid: "",
    imageResourceUuid: "",
    categoryUuids: [],
  });

  const { title, description } = formData;

  useEffect(() => {
    getCategories();
  }, []);

  const onAudioChange = (e) => {
    setAudio(e.target.files[0]);
  };

  const onPictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const audioData = new FormData();
    audioData.append("file", audio);

    const pictureData = new FormData();
    pictureData.append("file", picture);

    axios
      .post(`${process.env.REACT_APP_MUSICNATOR_API_URL}/uploads`, audioData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        formData.audioResourceUuid = response.data.uuid;
        axios
          .post(
            `${process.env.REACT_APP_MUSICNATOR_API_URL}/uploads`,
            pictureData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then(function (response) {
            // handle success
            formData.imageResourceUuid = response.data.uuid;
            formData.categoryUuids = multiSelections.map((it) => it.uuid);
            axios.post(
              `${process.env.REACT_APP_MUSICNATOR_API_URL}/audios`,
              formData,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
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
                  <Form.Group controlId="audio" className="mb-3">
                    <Form.Label className="fw-bold uploadFormText ">
                      Upload your audio track
                    </Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Profile picture"
                      onChange={onAudioChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="picture" className="mb-3">
                    <Form.Label className="fw-bold uploadFormText ">
                      Upload your audio cover
                    </Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Profile picture"
                      onChange={onPictureChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Audio Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={onChange}
                      id="title"
                      value={title}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                      Audio description
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First title"
                      onChange={onChange}
                      id="description"
                      value={description}
                    />
                  </Form.Group>

                  <Form.Group style={{ marginTop: "20px" }}>
                    <Form.Label className="fw-bold uploadFormText">
                      Select Categories
                    </Form.Label>
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
