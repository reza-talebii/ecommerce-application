import React from "react";

import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

import { useProductContext } from "../context/product/ProductContext";

import { Cart } from "./";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useProductContext();

  return (
    <nav className="navbar-container">
      <p className="logo">
        <Link href={"/"} passHref>
          <a>
            <AiFillHome style={{ fontSize: 26 }} />
          </a>
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(!showCart)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
