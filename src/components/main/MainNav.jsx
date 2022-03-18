import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillInboxFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { IoMdAirplane } from "react-icons/io";
import { RiLuggageDepositLine } from "react-icons/ri";
import "./style.css";

function MainNav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <BsFillInboxFill />
            </p>
            <p className="mb-0 font-size-12-needed">Stays</p>
          </div>
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <AiFillCar />
            </p>
            <p className="mb-0 font-size-12-needed">Cars</p>
          </div>
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <IoMdAirplane />
            </p>
            <p className="mb-0 font-size-12-needed">Flights</p>
          </div>
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <RiLuggageDepositLine />
            </p>
            <p className="mb-0 font-size-12-needed">Packages</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <NavDropdown className="ml-5" title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="ml-5" title="USD" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="ml-5" href="#home">
              EN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MainNav;
