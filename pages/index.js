import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <section className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of may variations</p>
      </section>

      <section className="products-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => product)}
      </section>

      <FooterBanner></FooterBanner>
    </>
  );
};

export default Home;
