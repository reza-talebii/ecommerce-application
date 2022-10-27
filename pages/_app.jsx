import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

import { Layout } from "../components";

import { ProductProvider } from "../context/product/ProductProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
