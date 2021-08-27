import React from "react";
import LayOut from "../components/layout";
import ProductList from "../components/productList";

const Products = () => {
  return (
    <>
      <LayOut text="Products">
        <ProductList />
      </LayOut>
    </>
  );
};

export default Products;
