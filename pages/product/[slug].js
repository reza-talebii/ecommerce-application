import React, { useState } from "react";

import { client } from "../../lib/client";
import { Product, ProductDetail } from "../../components";

const ProductDetails = ({ product, products }) => {
  return (
    <section>
      <ProductDetail product={product} />
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
    </section>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current== '${slug}'][0]`;
  const productQuery = `*[_type == "product"]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productQuery);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;
