import React from "react";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Container, Card } from "react-bootstrap";
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
        <Card border="primary" className="m-4 border border-3 p-4 ">
          <Row>
            {loading &&
              users.map((user) => (
                <Col lg={3} md={4} sm={6} xs={12} key={user.uuid}>
                  <User user={user} />
                </Col>
              ))}
          </Row>
        </Card>
      </Container>
    </Fragment>
  );
}

export default Users;
