import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import OauthLinks from "./OauthLinks";

function MySignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelRegister = () => {
    navigate("/");
  };
  return (
    <div className="main-div-login">
      <div className="shadow-needed">
        <Row>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="mb-0 trivago-main-page-h1-text-1">
              <span style={{ color: "#1391d2" }}>tri</span>
              <span style={{ color: "#fc9e15" }}>va</span>
              <span style={{ color: "#e3403d" }}>go</span>
            </h1>
          </Link>
        </Row>
        <Row className="w-100">
          <Col className="col-1-login">
            <h4>Log in or create an account</h4>
            <p>Enter your e-mail address to start</p>
            <Form onSubmit={handelRegister}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow-none"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-none"
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
            </Form>
            <p className="mb-0 mt-3">Password requirements</p>
            <p className="mb-0 text-muted ml-3">Has minimum 10 characters.</p>
            <p className="mb-0 text-muted ml-3">
              Contains at least 1 upper case character.
            </p>
            <Button
              className="mt-3 mb-5"
              variant="secondary"
              type="submit"
              disabled={!email || !password}
              onClick={() => handelRegister()}
            >
              Register
            </Button>
          </Col>
          <div className="col-3-login pl-3 mt-5"></div>
          <Col className="col-2-login pl-3">
          <OauthLinks/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MySignUp;
