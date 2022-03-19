import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import OauthLinks from "./OauthLinks";

function MySignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const newPost = {
      name: name,
      surname: lastName,
      email: email,
      password: password,
    };
    try {
      let res = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json" },
      });
      if (res.status !== 200) {
        // handleOpen();
        alert("you you entered wrong password or email");
        // setOpen(true);
      }
      if (res.ok) {
        let data = await res.json();
        localStorage.setItem("MyToken", data.token);
        console.log(data.posts);
        console.log("Successfully registered!");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handelRegister = () => {
    handleRegister();
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
              <Form.Group controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow-none"
                  type="text"
                  placeholder="Enter Your name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="shadow-none"
                  type="text"
                  placeholder="Enter Your surname"
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
              Register
            </Button>
          </Col>
          <div className="col-3-login pl-3 mt-5"></div>
          <Col className="col-2-login pl-3">
            <OauthLinks />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MySignUp;
