import React from "react";
import Product from "./index";

const ProductSlider = ({ products }) => {
  return (
    <div className="maylike-products-wrapper">
      <h2>You may also like</h2>
      <div className="marquee">
        <div className="maylike-products-container track">
          {products.map((product) => (
            <Product key={product._id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
