/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import logo from "../assets/your-web-logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <header className="w-full fixed top-0 left-0 right-0 font-black">

      {/* Top Header Contact Section Start */}
      <div className="contact-info bg-gray-200 py-1 px-1 text-center">
            <p className="text-gray-800">
              <a href="mailto:testing@gmail.com" className="text-blue-500 hover:text-blue-700 text-sm">
                <i className="fa fa-envelope mr-2"></i>contactus@viraltechnologies.in
              </a>
              <span className="ml-2 mr-2 mob_views">||</span> {/* Separate email and phone with a pipe symbol */}
              <a href="tel:+9389486561" className="text-blue-500 hover:text-blue-700 text-sm">
                <i className="fa fa-phone mr-2"></i>9389486561
              </a>
            </p>
      </div>
      {/* Top Header Contact Section End */}

      <style>
        {`
        @media screen and (max-width: 1350px ) {
          .try-again{
            padding: 0; 
            column-gap:0;
          }
          
        }
        @media screen and (max-width: 1100px ) {
          .set-nav{
            padding-left:0;
            padding-right:0;
          }
          
        }
        @media screen and (max-width: 1130px ) {
          .call-button{
            padding: 0; 
            column-gap:0;
            float:right;
          }

          .aboutus-gap{
            padding:0;
          }
      `}
      </style>

      <nav
        className={`py-4 md:px-12 px-4 bg-blue-600 set-nav ${
          isSticky ? "sticky top-0 right-0 left-0 bg-blue-600 set-nav" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
            <img src={logo} alt="" className="h-10" />
          </div>
          
          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="home" className="block text-white hover:text-black py-2 px-4 cursor-pointer try-again">
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="developers" className="block text-white hover:text-black py-2 px-4 cursor-pointer try-again">
              Developers
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="projects" className="block text-white hover:text-black py-2 px-4 cursor-pointer try-again">
              
              Projects
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="services" className="block text-white  hover:text-black py-2 px-4 cursor-pointer try-again">
              Services
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="team" className="block text-white  hover:text-black py-2 px-4 cursor-pointer try-again">
              
              Our Team
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="contact" className="block text-white  hover:text-black py-2 px-4 cursor-pointer try-again">
              Join Us
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="contact" className="block text-white  hover:text-black py-2 px-4 cursor-pointer try-again">
              Contact
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="about-us" className="block text-white  hover:text-black py-2 px-4 cursor-pointe try-again">
              About us
            </Link>
          </div>

          {/* contact me btn */}
          <div className="lg:block hidden">
            <a href="#contact" className="px-3 py-2 bg-transparent border border-black text-black bg-white  rounded hover:bg-black hover:text-white transition-all duration-300 call-button">
            <i className="fa fa-phone px-2"></i>Contact us
            </a>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-gradient-to-r from-[#91d8ed] to-[#2009ed] p-4 rounded-lg font-black">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="home" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="developers" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              Developers
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="projects" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              Projects
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="services" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              Services
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="team" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              Our Team
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="contact" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              Join Us
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="contact" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              Contact
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="about-us" className="block text-white  hover:text-black py-2" onClick={closeMenu}>
              About
            </Link>
          </div>
        )}
      </nav>
    </header>

    
    </>
  );
};

export default Navbar;
