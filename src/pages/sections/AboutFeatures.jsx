import React from "react";

const AboutFeatures = () => {
  return (
    <>
      <section className="about__Feature--BG">
        <div className="about__Feature--Container">
          <div className="about__Feature--Flex">
            <div className="about__Feature--Box-1">
              <div className="about__Feature--Heading-1">
                <h2 className="about__Feature--Heading-Primary font-heading">
                  Jam-packed with all the tools you need to succeed!
                </h2>
                <p className="about__Feauture--Heading-Desc">
                  It&apos;s never been easier to build a business of your own.
                  Our tools will help you with the following:
                </p>
                <ul>
                  <li className="about__Feature--List-Box">
                    <svg
                      className="about__Feature--List-Icon_1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span className="about__Feature--List-Text">
                      Faster Processing and Delivery
                    </span>
                  </li>
                  <li className="about__Feature--List-Box">
                    <svg
                      className="about__Feature--List-Icon_2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span className="about__Feature--List-Text">
                      Out of the Box Tracking and Monitoring
                    </span>
                  </li>
                  <li className="about__Feature--List-Box">
                    <svg
                      className="about__Feature--List-Icon_3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="about__Feature--List-Text">
                      100% Protection and Security for Your App
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__Feature--Box-2">
              <img
                className="about__Feature--Box-Img"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFeatures;
