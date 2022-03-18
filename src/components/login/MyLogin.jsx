import React, { useState, useEffect } from "react";
import "./style.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { AiOutlineGooglePlus, AiFillApple } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

function MyLogin() {
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
            <Button
              className="mt-3 mb-5"
              variant="secondary"
              type="submit"
              disabled={!email || !password}
              onClick={() => handelRegister()}
            >
              Login
            </Button>
          </Col>
          <div className="col-3-login pl-3 mt-5"></div>
          <Col className="col-2-login pl-3 mb-5">
            <h6>Or use trivago with another account</h6>
            <Button className="my-1 continue-with-btn" variant="secondary">
              <AiOutlineGooglePlus />
              Continue with Google
            </Button>
            <Button className="my-1 continue-with-btn" variant="secondary">
              <FaFacebookSquare />
              Continue with Facebook
            </Button>
            <Button className="my-1 continue-with-btn" variant="secondary">
              <AiFillApple />
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
