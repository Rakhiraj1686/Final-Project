import React from "react";

const Product = ({ title, price, features }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="Product h-20 w-30 border mt-10 p-3 rounded-2xl">
          <h3 className="font-bold">{title}</h3>
          <h5>Price : {price}</h5>
          <p>{features}</p>
        </div>
      </div>
    </>
  );
};
export default Product;
