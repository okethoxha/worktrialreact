import React from "react";
import Header from "./header";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LayOut = ({ children, text }) => {
  return (
    <>
      <Header />
      <Container className="mt-4">{text}</Container>
      <hr style={{ marginBottom: "0px" }} />

      <div>{children}</div>

      <hr className="mt-5" style={{ marginBottom: "0px" }} />
      <Link to="/">
        <div className="ml-4 mt-4">
          <Button variant="dark">Back</Button>
        </div>
      </Link>
    </>
  );
};

export default LayOut;
