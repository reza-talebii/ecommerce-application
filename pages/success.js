import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useProductContext } from "../context/product/ProductContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } =
    useProductContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="reza.talebi0902@gmail.com">
            reza.talebi0902@gmail
          </a>
        </p>
        <Link href="/" passHref>
          <a>
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Success;
