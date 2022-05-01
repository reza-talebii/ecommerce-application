import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        {/* <Image src="d" alt="headphones" className="hero-banner-image" /> */}

        <div>
          <Link href={`/products/ID`} passHref>
            <a>
              <button type="button">BUTTON TEXT</button>
            </a>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
