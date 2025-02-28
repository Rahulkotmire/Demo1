import React from "react";
import "./Campus.css";
import images1 from "../../assets/images1.jpg";
import images2 from "../../assets/images2.jpg";
import images3 from "../../assets/images3.jpg";
import images4 from "../../assets/images4.jpg";

const campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={images1} />
        <img src={images2} />
        <img src={images3} />
        <img src={images4} />
      </div>
      <button className="camp_btn"> See more </button>
    </div>
  );
};

export default campus;
