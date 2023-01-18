import React from "react";
import hero from "../assets/Images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-wrapper bg-[#f1f6fd] md:h-[600px]">
      <div className="hero flex flex-col items-center py-10 px-6 md:flex-row md:py-12 md:px-24 justify-between">
        <div className="hero-text z-20 md:w-[50%]">
          <h5 className="text-[#eb5757] font-semibold mb-2 md:mb-4">
            HackCity Tech Inc.
          </h5>
          <h1 className="text-[#032555] text-[30px] mb-6 font-semibold md:text-[43px] md:leading-[60px] md:mb-8">
            Tech Innovation and Business Development Hub
          </h1>
          <p className="text-[#3a3a3a] text-[15px] leading-6 font-semibold md:text-[15px] md:w-[75%]">
            Equipped with the resources to jumpstart your idea. Experienced
            software and business developers for all your needs, simple or
            complex.
          </p>

          <div className="hero-button mt-10 mb-8 md:mb-0">
            <Link to="/hire">
              <button className="button1 mr-10">Hire Developers</button>
            </Link>
            <button className="button2 font-semibold ">Contact Us</button>
          </div>
        </div>

        <div className="hero-img lg:absolute mt-5 lg:left-[550px] overflow-hidden z-0">
          <img
            className=" lg:w-[800px] lg:mt-20 md:ml-0"
            src={hero}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
