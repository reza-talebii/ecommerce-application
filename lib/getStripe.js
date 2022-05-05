import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51Kw1hHAzgLmMGD7oeY9Uxn4M1m1Bm2hn7TconIAOXNDhxj6ELjcjICc5HcWocnCzs1P1BKly5ZXU5Y8xVpqSHjKv00vNRKMErY"
    );
  }

  return stripePromise;
};

export default getStripe;
