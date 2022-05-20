import React from "react";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import User from "./User";

function Users() {
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
    <Fragment>
      <Container fluid>
        <Row>
          {loading &&
            users.map((user) => (
              <Col md={3} sm={6} xs={12}>
                <User user={user} />
              </Col>
            ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Users;
