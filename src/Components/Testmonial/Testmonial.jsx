import React, { useRef } from "react";
import "./Testmonial.css";
import back from "../../assets/back.png";
import next from "../../assets/next.png";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";

const Testmonial = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%) `;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%) `;
  };

  return (
    <div className="Test">
      <div className="Testmonial">
        <img src={back} className="back_btn" onClick={slideBackward} />
        <img src={next} className="next_btn" onClick={slideForward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={person1} alt="" />
                  <div>
                    <h1>Jack Sparrow</h1>
                    <span>solapur, maharashtra</span>
                  </div>
                </div>
                <p>
                  Captain Jack Sparrow is a fictional character and the main
                  protagonist of the Pirates of the Caribbean film series and
                  franchise, but the final version of the character was created
                  by actor Johnny Depp, who also portrayed him
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={person2} alt="" />
                  <div>
                    <h1>Tony Stark</h1>
                    <span>Kolaphur, maharashtra</span>
                  </div>
                </div>
                <p>
                  Anthony Edward Stark is a fictional character primarily
                  portrayed by Robert Downey Jr. in the Marvel Cinematic
                  Universe (MCU) media franchise —based on the Marvel Comics
                  character of the same name— commonly known by his alias, Iron
                  Man.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={person3} alt="" />
                  <div>
                    <h1>Dead pool</h1>
                    <span>Satara, maharashtra</span>
                  </div>
                </div>
                <p>
                  American superhero film based on Marvel Comics featuring the
                  characters Deadpool and Wolverine. In the film, Deadpool
                  learns that the Time Variance Authority is set to destroy his
                  home universe and works with a reluctant Wolverine from
                  another universe to stop them.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user_info">
                  <img src={person4} alt="" />
                  <div>
                    <h1>Peaky Blinder</h1>
                    <span>malung, maharashtra</span>
                  </div>
                </div>
                <p>
                  Peaky Blinders is a British period crime drama television
                  series created by Steven Knight.The fictional gang is loosely
                  based on a real urban youth gang who were active in the city
                  from the 1880s to the 1920s.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
