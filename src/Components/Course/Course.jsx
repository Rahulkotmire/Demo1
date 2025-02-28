import React from "react";
import "./Course.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import program4 from "../../assets/program4.png";

const Course = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <p>know more</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <p>know more</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <p>know more</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
