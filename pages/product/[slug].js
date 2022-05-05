import React from "react";

import { client } from "../../lib/client";
import { ProductDetail, ProductSlider } from "../../components";

const ProductDetails = ({ product, products }) => {
  return (
    <section>
      <ProductDetail product={product} />
      <ProductSlider products={products} />
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
