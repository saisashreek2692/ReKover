import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner__BG">
        <div className="banner__Container">
          <div className="banner__Container--Flex">
            <div className="banner__Section-1">
              <div className="banner__Section--Left">
                <h1 className="banner__Section--Heading">
                  <span className="banner__Section--Heading-Primary">Useful Tools to</span>
                  <span className="banner__Section--Heading-Secondary">
                    Help You Build Faster.
                  </span>
                </h1>
                <p className="banner__Section--Desc">
                  It&apos;s never been easier to build beautiful websites that
                  convey your message and tell your story.
                </p>
                <div className="banner__Section--Btns-Flex">
                  <Link
                    to="/login"
                    className="banner__Section--Btns-1"
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <Link
                    to="/"
                    className="banner__Section--Btns-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="banner__Section-2">
              <div className="banner__Section--Right">
                <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
