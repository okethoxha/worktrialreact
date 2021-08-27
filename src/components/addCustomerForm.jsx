import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import history from "../utils/history";
import Form from "react-bootstrap/Form";
import { addCustomer } from "../utils/api-routes";
import { Button } from "react-bootstrap";

const AddCustomerForm = () => {
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    birthdate: "",
    jobTitle: "",
    category: "NEW_CUSTOMER",
    emailAddress: "",
    customerAddress: {
      street: "string",
      houseNumber: "string",
      state: "string",
      country: "string",
      city: "string",
      zipCode: "string",
    },
  });

  const [loader, setLoader] = useState(false);

  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoader(true);

    e.preventDefault();

    addCustomer(data).subscribe((res) => {
      if (res.status === 200) {
        setMessage("User Added");
        setTimeout(() => {
          history.push("/");
          setLoader(false);
        }, 1000);
      } else {
        setMessage("Something went wrong");
        setLoader(false);
      }
      console.log(res);
    });
  };

  return (
    <div className="mb-4">
      <Container className="heading mt-4 ">Add New Customer</Container>
      <Container className="box mb-4">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} className="mb-2 " controlId="formGridAddress1">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                name="birthdate"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                name="jobTitle"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="emailAddress"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          {message ? <div>{""}</div> : ""}
          <Button type="submit" variant="dark" className="mt-4">
            Submit {loader ? <i class="fas fa-spinner fa-spin"></i> : ""}{" "}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddCustomerForm;
