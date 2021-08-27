import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ setSearch }) => {
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Form.Control type="text" placeholder="Search..." onChange={onChange} />
    </>
  );
};

export default Search;
