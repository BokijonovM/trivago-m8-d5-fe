import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillInboxFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { IoMdAirplane } from "react-icons/io";
import { RiLuggageDepositLine } from "react-icons/ri";
import "./style.css";
import { Link } from "react-router-dom";

function MyNavbar() {

  const [user, setUser] = useState()

  useEffect(() => {
    setTimeout(
      fetchData(window.localStorage.getItem("token")),5000)
  },[])
  
  const fetchData = async(token) => {
    try {
      if(token){
        const response = await fetch('http://localhost:3001/users/me',{
        method:'GET',  
        headers:{
            authorization : token
          }
        })
        if(response.ok){
          const data =  await response.json()
          setUser(data)
          console.log(data)
        }
      }
    } catch (error) {
      console.log("error on fetchData");
      
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Nav.Link href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <BsFillInboxFill />
            </p>
            <p className="mb-0 font-size-12-needed">Stays</p>
          </div>
        </Nav.Link>
        <Nav.Link href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <AiFillCar />
            </p>
            <p className="mb-0 font-size-12-needed">Cars</p>
          </div>
        </Nav.Link>
        <Nav.Link href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <IoMdAirplane />
            </p>
            <p className="mb-0 font-size-12-needed">Flights</p>
          </div>
        </Nav.Link>
        <Nav.Link href="#home" className="p-0">
          <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
            <p className="mb-0">
              <RiLuggageDepositLine />
            </p>
            <p className="mb-0 font-size-12-needed">Packages</p>
          </div>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
              <Nav.Link> {user && user.name}</Nav.Link>
              <Link className="nav-link" to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
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

export default MyNavbar;
