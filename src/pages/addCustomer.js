import React from "react";
import AddNewCustomer from "../components/addNewCustomer";
import LayOut from "../components/layout";

const AddCustomer = () => {
  return (
    <>
      <LayOut text="Add New Customer">
        <AddNewCustomer />
      </LayOut>
    </>
  );
};

export default AddCustomer;
