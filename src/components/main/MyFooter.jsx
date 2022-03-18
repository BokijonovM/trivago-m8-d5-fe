import React from "react";
import { Row, Form, Button, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <div className="footer-main-div px-4 ">
      <Row className=" justify-content-between w-100 pt-4 pb-5">
        <p style={{ color: "white" }}>
          Want to receive exclusive hotel offers? Subscribe to our newsletter!
        </p>
        <div className="d-flex">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              style={{ paddingRight: "120px", background: "transparent" }}
              type="email"
              placeholder="Email address"
            />
          </Form.Group>
          <Button className="ml-2" variant="secondary">
            Subscribe
          </Button>
        </div>
      </Row>
      <Row className="h-line-row mx-3"></Row>
      <Row className="d-flex w-100 justify-content-between py-4">
        <div>
          <p className="mb-0 text-light">
            trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf,
          </p>
          <p className="mb-0 text-light">Germany</p>
        </div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            className="shadow-none"
            style={{ paddingRight: "220px", background: "transparent" }}
            as="select"
          >
            <option>USA</option>
            <option>UZB</option>
            <option>POL</option>
            <option>ITL</option>
            <option>ESP</option>
          </Form.Control>
        </Form.Group>
      </Row>
      <Row></Row>
      <Row className="p-white-needed pt-4 pb-5">
        <Col className="ml-0 pl-0">
          <p className="mb-0 text-light">Company</p>
          <p className="mb-0 text-light">Jobs</p>
          <p className="mb-0 text-light">Press</p>
          <p className="mb-0 text-light">Investor relations</p>
        </Col>
        <Col>
          <p className="mb-0 text-light">Mobile apps - searching on the go</p>
          <p className="mb-0 text-light">Mobile apps - searching on the go</p>
        </Col>

        <Col>
          <p className="mb-0 text-light">Company</p>
          <p className="mb-0 text-light">Jobs</p>
          <p className="mb-0 text-light">Press</p>
          <p className="mb-0 text-light">Investor relations</p>
          <p className="mb-0 text-light">Company</p>
          <p className="mb-0 text-light">Jobs</p>
          <p className="mb-0 text-light">Press</p>
          <p className="mb-0 text-light">Investor relations</p>
        </Col>
      </Row>
      <Row className="flex-column w-100 justify-content-center align-items-center py-5">
        <h2 className="text-light">trivago</h2>
        <p className="text-light mb-0">
          Copyright 2022 trivago | All rights reserved.
        </p>
      </Row>
    </div>
  );
}

export default MyFooter;
