import React from "react";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import UserAudios from "./users/UserAudios";

function AudioPlayer({ user }) {
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAudios();
  }, []);

  const getAudios = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_MUSICNATOR_API_URL}/audios/user/${user.uuid}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setAudios(res.data);
      setLoading(true);
      console.log(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      <Container fluid>
        <Row className="p-4 m-2">
          {loading &&
            audios.map((audio) => (
              <Row key={audio.uuid}>
                <UserAudios audio={audio} />
              </Row>
            ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default AudioPlayer;
