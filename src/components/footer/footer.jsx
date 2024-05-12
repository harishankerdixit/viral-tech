import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#91d8ed] to-[#2009ed] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">CafePulse</h1>
          <p className=" text-sm">
            Welcome to our coffee haven! Explore our aromatic brews, savor
            artisanal flavors, and discover the perfect roast to elevate your
            daily ritual.
          </p>
          <div className="font-semibold text-xl pt-4">
            Social Links
            <div>
            <a href="#" className="pt-1">
            <i className="fa fa-facebook-square px-2"></i>
            </a>

            <a href="#" className="pt-1">
            <i className="fa fa-instagram px-2"></i>
            </a>

            <a href="#" className="pt-1">
            <i className="fa fa-linkedin-square px-2"></i>
            </a>

            <a href="#" className="pt-1">
            <i className="fa fa-whatsapp px-2"></i>
            </a>

            <a href="#" className="pt-1">
            <i className="fa fa-twitter-square px-2"></i>
            </a>

            </div>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Products
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Cappuccino
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Latte
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Americano
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Add more
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Add more
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              CafePulse@email.com
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              +84 958 248 966
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Alt Gmail
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Alt Number
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Alt Number
            </a>
          </nav>
        </div>
      </div>
      <div>
        
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-backgroundColor">
              {" "}
              freelancers{" "}
            </span>
            | All rights reserved
          </p>
        
      </div>
    </div>
  );
};

export default Footer;