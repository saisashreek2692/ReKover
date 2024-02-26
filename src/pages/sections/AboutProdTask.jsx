import React from "react";

const AboutProdTask = () => {
  return (
    <>
      <div className="about__Tasks">
        <div className="about__Box--Right">
          <h2 className="about__Box--Heading-Primary">
            Automated Tasks
          </h2>
          <p className="about__Box--Desc">
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>
          <ul className="about__List--Box">
            <li className="about__List--Info">
              <span className="about__List--Flex">
                <span className="about__List--Text">✓</span>
              </span>{" "}
              Automated task management workflow
            </li>
            <li className="about__List--Info">
              <span className="about__List--Flex">
                <span className="about__List--Text">✓</span>
              </span>{" "}
              Detailed analytics for your data
            </li>
            <li className="about__List--Info">
              <span className="about__List--Flex">
                <span className="about__List--Text">✓</span>
              </span>{" "}
              Some awesome integrations
            </li>
          </ul>
        </div>

        <div className="about__Box--Left">
          <img
            src="https://cdn.devdojo.com/images/december2020/settings.png"
            className="about__Box--Img"
          />
        </div>
      </div>
    </>
  );
};

export default AboutProdTask;
