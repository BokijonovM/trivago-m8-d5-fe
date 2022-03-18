import React from "react";
import "./style.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyLogin() {
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="shadow-none"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Button className="my-3" variant="secondary">
              Create an account
            </Button>
          </Col>
          <div className="col-3-login pl-3 mt-5"></div>
          <Col className="col-2-login pl-3">
            <h6>Or use trivago with another account</h6>
            <Button className="my-1 continue-with-btn" variant="secondary">
              Continue with Google
            </Button>
            <Button className="my-1 continue-with-btn" variant="secondary">
              Continue with Facebook
            </Button>
            <Button className="my-1 continue-with-btn" variant="secondary">
              Continue with Apple
            </Button>
          </Col>
        </Row>
      </div>
      <Link to="/sign-in">
        <Button className="create-account-btn py-3 px-5" variant="secondary">
          Create an account
        </Button>
      </Link>
    </div>
  );
}

export default MyLogin;
