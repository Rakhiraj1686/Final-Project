import React from "react";
import Product from "./Product.jsx";

const ProductTab = () => {
  let Options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product title="Phone" price={30000} features={Options} />
      <Product title="Laptop" price={40000} />
      <Product title="Pen" price={10000} />
    </>
  );
};
export default ProductTab;
