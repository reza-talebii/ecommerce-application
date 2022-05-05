import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ item }) => {
  const { image, name, slug, price } = item;

  return (
    <section>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt="product"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{`$${price}`}</p>
        </div>
      </Link>
    </section>
  );
};

export default Product;
