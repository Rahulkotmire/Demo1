import React from "react";
import "./About.css";
import tech from "../../assets/tech1.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={tech} alt="" />
      </div>
      <div className="about_right">
        <h3>this is Right Section</h3>
        <p>
          Technology is the application of knowledge to achieve practical goals,
          and it can be a tangible tool or intangible software. It has become a
          necessity in modern life, influencing every aspect of how we live,
          work, and interact with each other. Here are some points to consider
          in a paragraph on technology
        </p>
      </div>
    </div>
  );
};

export default About;
