import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { deleteCustomer } from "../utils/api-routes";
import { Modal, Button } from "react-bootstrap";
import Loader from "./loader";

const Tables = ({ data, getData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userId, setUserId] = useState("");
  const deleteUser = (id) => {
    deleteCustomer(id).subscribe((res) => {
      getData();
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <i class="fas fa-exclamation-circle fa-7x"></i>
          </div>
          <h3>Are you Sure?</h3>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="danger" onClick={handleClose} className="mr-2">
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                deleteUser(userId);
              }}
              className="ml-2"
            >
              Yes, Delete it!
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Container>
        {data ? (
          <Table
            variant="dark"
            striped
            bordered
            hover
            size="sm"
            className="mt-4"
            responsive
          >
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job title</th>
                <th>Email</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.jobTitle}</td>
                  <td>{customer.emailAddress}</td>
                  <td>{customer.category}</td>
                  <td style={{ textAlign: "center" }}>
                    <i
                      className="far fa-trash-alt pointer"
                      onClick={() => {
                        handleShow();
                        setUserId(customer.id);
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};

export default Tables;
