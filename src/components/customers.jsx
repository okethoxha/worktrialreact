import React, { useEffect, useState } from "react";
import Tables from "./table";
import Search from "./search.jsx";
import { getCustomers } from "../utils/api-routes";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Customers = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const getCustomerInfo = () => {
    getCustomers().subscribe((res) => {
      setData(res.response);
    });
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);

  const filteredData = data
    ? data.filter((data) =>
        data.firstName.toLowerCase().includes(search.toLowerCase())
      )
    : "";

  return (
    <>
      <Container className="mt-4">Customers</Container>
      <hr style={{ marginBottom: "0px" }} />
      <Container>
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-4">
            <Link to="/add-customer">
              <Button variant="dark" className="mt-4">
                Add Customer
              </Button>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 mt-4 align-self-end">
            <Search setSearch={setSearch} />
          </div>
        </div>
      </Container>
      <Tables getData={getCustomerInfo} data={filteredData} />
    </>
  );
};

export default Customers;
