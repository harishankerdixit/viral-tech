import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import logos from "../../assets/your-web-logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "Developers",
    link: "/#developers",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Services",
    link: "/#services",
  },
];
const FooterLinks1 = [
  {
    title: "Our Team",
    link: "/#team",
  },
  {
    title: "Join Us",
    link: "/#contact",
  },
  {
    title: "Contact Us",
    link: "/#contact",
  },
  {
    title: "About Us",
    link: "/#about-us",
  },
];
const FooterLinks2 = [
  {
    title: "Web Application",
    link: "/#projects",
  },
  {
    title: "Mobile Application",
    link: "/#projects",
  },
  {
    title: "E-Commerce Development",
    link: "/#projects",
  },
  {
    title: "Software Development",
    link: "/#projects",
  },
];
const Footer = () => {
  return (
    <div className="bg-gradient-to-r bg-blue-600">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <div className="text-white font-bold text-lg cursor-pointer">
                <img src={logos} alt="" className="h-12" />
              </div>
            </h1>
            <p className="">
            Accelerate your business growth with our top-notch web and app development services. Reach wider audiences, boost engagement, and amplify your brand's online presence. Let's unlock your digital potential together!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Akshardham, New Delhi</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <a href="mailto:testing@gmail.com" className="">
                <i className="fa fa-envelope mr-2"></i>contactus@viraltechnologies.in
              </a>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <a href="tel:+9389486561" className="">
                9389486561
              </a>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-white">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                    {FooterLinks.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-white space-x-1 font-semibold">
                        <span>&#11162;</span><a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-white">
                  Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                    {FooterLinks1.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-white space-x-1 font-semibold">
                        <span>&#11162;</span><a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-white">
                  Development
                </h1>
                <ul className={`flex flex-col gap-3`}>
                    {FooterLinks2.map((link) => (
                      <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-white space-x-1 font-semibold">
                        <span>&#11162;</span><a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-2 border-t-2 border-gray-300/50" style={{ fontSize: '12px' }}>
            @copyright 2024 All rights reserved || Made By <b>viraltechnologies.in</b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;