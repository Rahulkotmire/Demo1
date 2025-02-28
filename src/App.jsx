import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Course from "./Components/Course/Course";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testmonial from "./Components/Testmonial/Testmonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="our offer" title="What We Offer" />
        <Course />
        <Title subTitle="" title="About Us" />
        <About />
        <Title subTitle="our photos" title="Gallery" />
        <Campus />
        <Title subTitle="our Students" title="Testmonial" />
        <Testmonial />
        <Title subTitle="contact us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default App;
