import React from "react";

const Product = ({ title, price }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="Product h-20 w-30 border mt-10 p-3">
          <h3>{title}</h3>
          <h5>Price : {price}</h5>
        </div>
      </div>
    </>
  );
};
export default Product;
