import React from "react";
import logo1 from "../assets/Images/logo1.png";
import logo2 from "../assets/Images/logo2.png";
import logo3 from "../assets/Images/logo3.png";
import logo4 from "../assets/Images/logo4.png";
import logo5 from "../assets/Images/logo5.png";
import logo6 from "../assets/Images/logo6.png";
import logo7 from "../assets/Images/logo7.png";

function Logo() {
  return (
    <div className="bg-[#f1f6fd] px-20 py-3">
      <h3 className="text-[#032555] font-bold my-8 text-[20px]">
        Successful Businesses & Startups
      </h3>
      <section className="flex flex-wrap justify-between">
        <img className="w-[40px] mb-5" src={logo1} alt="logo1" />
        <img className="w-[40px] mb-5" src={logo2} alt="logo2" />
        <img className="w-[40px] mb-5" src={logo3} alt="logo3" />
        <img className="w-[40px] mb-5" src={logo4} alt="logo4" />
        <img className="w-[40px] mb-5" src={logo5} alt="logo5" />
        <img className="w-[40px] mb-5" src={logo6} alt="logo6" />
        <img className="w-[40px] mb-5" src={logo7} alt="logo7" />
      </section>
    </div>
  );
}

export default Logo;
