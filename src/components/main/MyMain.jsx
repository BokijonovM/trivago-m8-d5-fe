import React from "react";
import MainNav from "./MainNav";
import { Row, Button, Form } from "react-bootstrap";
import MyFooter from "./MyFooter";
import { BsSearch, BsFillCalendarEventFill, BsPeople } from "react-icons/bs";

function MyMain() {
  return (
    <div>
      <MainNav />

      <Row className="align-items-center py-5 row-1">
        <h1 className="mb-0 trivago-main-page-h1-text">
          <span style={{ color: "#1391d2" }}>tri</span>
          <span style={{ color: "#fc9e15" }}>va</span>
          <span style={{ color: "#e3403d" }}>go</span>
        </h1>
        <div className="line-between-text pl-5"></div>
        <div className="pl-5">
          <h3>Deals from your favorite booking sites</h3>
          <h6 className="mb-0">
            Try searching for a city, a specific hotel, or even a landmark!
          </h6>
        </div>
      </Row>
      <Row
        className=" py-5 flex-column row-2-main-page"
        style={{ marginBottom: "170px" }}
      >
        <Row className="w-100">
          <div>
            <Button className="mr-2 button-class-0" variant="info">
              All stays
            </Button>
            <Button className="mr-2 button-class-1" variant="info">
              Hotels
            </Button>
            <Button className="mr-2 button-class-1" variant="info">
              House/Apartment
            </Button>
          </div>
          <div className="search-form-div">
            <div className="ml-2 d-flex align-items-center text-muted">
              <BsSearch />
              <Form.Group controlId="formBasicText">
                <Form.Control
                  className="border-0 shadow-none"
                  type="text"
                  placeholder="Enter a hotel name or destination"
                />
              </Form.Group>
            </div>
            <div className="d-flex align-items-center v-line-needed ml-2 pl-3">
              <BsFillCalendarEventFill />
              <div className="ml-2">
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  Check in
                </p>
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  --/--/--
                </p>
              </div>
            </div>
            <div className="check-in-out-v-line"></div>
            <div className="d-flex align-items-center ml-2">
              <div className="ml-2">
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  Check out
                </p>
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  --/--/--
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center v-line-needed mx-2 pl-3">
              <BsPeople />
              <div className="ml-2">
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  1 Room
                </p>
                <p
                  className="mb-0"
                  style={{ fontSize: "12px", fontWeight: "700" }}
                >
                  2 Guests
                </p>
              </div>
              <Button className="ml-5 px-5" variant="info">
                Search
              </Button>
            </div>
          </div>
        </Row>
        <Row>
          <h4>We compare multiple booking sites at once</h4>
        </Row>
        <Row className="justify-content-between align-items-center w-100">
          <h5 className="text-muted">Booking.com</h5>
          <h5 className="text-muted">Expedia</h5>
          <h5 className="text-muted">Hotels.com</h5>
          <h5 className="text-muted">Vrbo</h5>
          <h5 className="text-muted">All</h5>
          <h5 className="text-muted">Trip.com</h5>
          <h5 className="text-muted">priceline</h5>
          <h6 className="text-muted">+100 more</h6>
        </Row>
      </Row>

      <MyFooter />
    </div>
  );
}

export default MyMain;
// Enter a hotel name or destination
