import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setsticky] = useState(false); //use state  effect (variable declare) ,usestate=take from Snippet
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false); //on scroll more than 50px
    });
  }, []);
  return (
    <nav className={`container ${sticky ? `dark_nav` : ""}`}> 
      <img src={logo} alt="" className="logo" />
      <ul>
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li> <Link to='programs' smooth={true} offset={-256} duration={500}>Coures</Link> </li>
        <li> <Link to='campus' smooth={true} offset={-260} duration={500}>placement</Link></li>
        <li> <Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li> <Link to='Testmonial' smooth={true} offset={-260} duration={500}>Testmonial</Link></li>
        <li>
        <Link to='contact' smooth={true} offset={-260} duration={500}>contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
