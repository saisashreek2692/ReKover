import React from "react";

const AboutProdBoost = () => {
  return (
    <>
      <div className="about__Box">
        <div className="about__Box--Left">
          <img
            src="https://cdn.devdojo.com/images/december2020/productivity.png"
            className="about__Box--Img"
          />
        </div>

        <div className="about__Box--Right">
          <h2 className="about__Box--Heading-Primary">Boost Productivity</h2>
          <p className="about__Box--Desc">
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>
          <ul className="about__List--Box">
            <li className="about__List--Info">
              <span className="about__List--Flex">
                <span className="about__List--Text">✓</span>
              </span>{" "}
              Maximize productivity and growth
            </li>
            <li className="about__List--Info">
              <span className="about__List--Flex">
                <span className="about__List--Text">✓</span>
              </span>{" "}
              Speed past your competition
            </li>
            <li className="about__List--Info">
              <span className="about__List--Flex">
                <span className="about__List--Text">✓</span>
              </span>{" "}
              Learn the top techniques
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutProdBoost;
