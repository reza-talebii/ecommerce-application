import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <section>
        <h2>Beset Selling Products</h2>
        <p>Speakers of may variations</p>
      </section>
      <section>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => product)}
      </section>
      <footer></footer>
    </>
  );
};

export default Home;
