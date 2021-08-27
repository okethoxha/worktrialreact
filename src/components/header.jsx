import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Web Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              {" "}
              Customers
            </Link>
            <Link to="/products" className="nav-link">
              {" "}
              Products
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
