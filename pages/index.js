import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ bannerData, products }) => {
  return (
    <>
      <HeroBanner banner={""} />

      <section className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of may variations</p>
      </section>

      <section className="products-container">
        {/* {products?.map((product) => product)} */}
      </section>

      <FooterBanner></FooterBanner>
    </>
  );
};

export const getServerSideProps = async () => {
  const productsQuery = `*[_type == "product"]`;
  const products = await client.fetch(productsQuery);

  //GET BANNER DATA
  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
