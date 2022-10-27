import React from "react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "../../lib/client";

const HeroBanner = ({ banner }) => {
  const { midText, smallText, buttonText, desc, largeText1, image } = banner[0];

  return (
    <section className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/`} passHref>
            <a>
              <button type="button">{buttonText}</button>
            </a>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
