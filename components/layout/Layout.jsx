import React from "react";

import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Head>
        <title>Reza Talebi Store</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Layout;
