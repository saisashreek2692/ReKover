import React from "react";
import { Link } from "react-router-dom";
import { Headernav, Headerform } from "./index";

const Header = () => {
  return (
    <>
      <section className="header__Box">
        <div className="header__Container">
          <div className="header__Flex">
            <Link
              to="/"
              className="header__Anchor"
            >
              <span className="header__Anchor--Span-1">
                RK<span className="header__Anchor--Span-2">.</span>
              </span>
            </Link>
            <Headernav />
          </div>

          <Headerform />
        </div>
      </section>
    </>
  );
};

export default Header;
