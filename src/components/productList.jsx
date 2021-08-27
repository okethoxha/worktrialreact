import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api-routes";
import { Image, ListGroup, Container } from "react-bootstrap";
import productImage from "../assets/product.jpg";
import Loader from "./loader";

const ProductList = () => {
  const [data, setData] = useState("");
  const getProductList = () => {
    getProducts().subscribe((res) => {
      setData(res.response);
    });
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <Container className="mt-4">
        {data ? (
          <div className="row">
            {data.map((product) => (
              <div className="col-md-3 col-lg-4 col-sm-12 ">
                <div className="box-product">
                  <Image src={productImage} alt="product image" fluid />
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h3>{product.label}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <b>Price:</b> ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Description:</b> {product.description}
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </Container>
    </>
  );
};

export default ProductList;
