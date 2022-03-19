import React, { useState, useEffect } from "react";
import "./style.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { AiOutlineGooglePlus, AiFillApple } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import OauthLinks from "./OauthLinks";

function MyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   const handelRegister = () => {
  //     navigate("/");
  //   };

  const handleRegister = async () => {
    const newPost = {
      email: email,
      password: password,
    };
    try {
      let res = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json" },
      });
      if (res.status !== 200) alert("you you entered wrong password or email");
      if (res.ok) {
        let data = await res.json();
        console.log(data.posts);
        localStorage.setItem("MyToken", data.token);
        navigate("/");
        console.log("Successfully logged in!");
      }
    } catch (error) {
      console.log(error);
    }
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
            <Form>
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
              onClick={() => handleRegister()}
            >
              Login
            </Button>
          </Col>
          <Col className="col-2-login pl-3 mb-5">
            <OauthLinks />
          </Col>
        </Row>
      </div>
      <Link to="/signUp">
        <Button className="create-account-btn py-3 px-5" variant="secondary">
          Create an account
        </Button>
      </Link>
    </div>
  );
}

export default MyLogin;
