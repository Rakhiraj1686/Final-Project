import React from "react";
import Product from "./Product.jsx";

const ProductTab = () => {
    return (
        <>
            <Product title="Phone" price="30,000"/>
            <Product title ="Laptop" price="40,000" />
            <Product title ="Pen" price="10,000"/>
        </>
    )
}
export default ProductTab;