import React from "react";
import hero from "../assets/Images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-wrapper bg-[#f1f6fd] lg:h-[600px]">
      <div className="hero flex flex-col items-center py-10 px-6 md:flex-row md:py-8 md:px-8 lg:px-24 justify-between">
        <div className="hero-text z-20 md:w-[70%] lg:w-[80%] xl:w-[60%]">
          <h5 className="text-[#eb5757] font-semibold mb-2 mt-10 md:mt-0 md:mb-4">
            HackCity Tech Inc.
          </h5>
          <h1 className="text-[#032555] text-[25px] md:text-[30px] mb-6 font-semibold md:text-[35px] lg:text-[43px] md:leading-[60px] md:mb-8">
            Tech Innovation and Business Development Hub
          </h1>
          <p className="text-[#3a3a3a] text-[15px] leading-6 font-semibold md:text-[15px] lg:w-[75%]">
            Equipped with the resources to jumpstart your idea. Experienced
            software and business developers for all your needs, simple or
            complex.
          </p>

          <div className="hero-button mt-10 mb-8 md:mb-0">
            <Link to="/hire">
              <button className="button1 mb-8 lg:mb-0 mr-10">Hire Developers</button>
            </Link>
            <button className="button2 font-semibold ">Contact Us</button>
          </div>
        </div>

        <div className="hero-img overflow-hidden z-0">
          <img
            className=" h-64 w-96 object-cover md:h-auto md:object-none md:min-w-[500px] lg:max-w-[800px] xl:min-w-[900px] xl:relative xl:left-[-50px] overflow-hidden lg:mt-0 md:ml-0"
            src={hero}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
