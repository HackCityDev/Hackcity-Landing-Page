import React from "react";
import hero from "../assets/Images/hero.png";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className="hero-wrapper bg-[#f1f6fd]">
      <div className="hero flex flex-col items-center py-10 px-5 md:flex-row py-12 px-24 justify-between">
        <div className="hero-text z-20 md:w-[50%]">
          <h5 className="text-[#eb5757] font-semibold mb-4">
            HackCity Tech Inc.
          </h5>
          <h1 className="text-[#032555] text-[30px] font-semibold md:text-[40px] leading-[55px] mb-8">
            Tech Innovation and Business Development Hub
          </h1>
          <p className="text-[#3a3a3a] text-[15px] leading-6 font-semibold md: text-[15px] w-[75%]">
            Equipped with the resources to jumpstart your idea. Experienced
            software and business developers for all your needs, simple or
            complex.
          </p>

          <div className="hero-button mt-5">
          <Link to = '/hire'>
          <button className="button1 mr-10 bg-[#032555] text-white mt-5 border-0 px-5 py-3 text-[14px] md:px-8">
              Hire Developers
            </button>
          </Link>
            <button className="button2 border-[1px] border-solid border-[#032555] text-[#032555] font-semibold px-8 py-3 mt-5 text-[14px] md:px-11">
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-img mt-5 overflow-hidden z-0">
          <img
            className="max-w-[600px] m-auto md:max-w-[700px] ml-5"
            src={hero}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
