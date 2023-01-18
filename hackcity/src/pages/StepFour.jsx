import React from "react";
import man from "../assets/Images/hire/rafiki.png";
import ArrowL from "../assets/Images/hire/ArrowRight (1).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import Button2 from "../components/PrevButton";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import Input from "../components/Input";

import { Link } from "react-router-dom";


function StepThree() {
  return (
    <div className="">
      <section className="flex text-center md:flex-row">
        <div className="bg-[#f1f6fd] w-[35%] h-[118vh]">
          <h1 className=" mt-12 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464]">step Four</p>
          <img
            className="w-[550px] mt-24 z-20 absolute"
            src={man}
            alt="illustration"
          />
        </div>

        <div className="p-8 text-left mt-4 ml-10 z-30">
          <h4 className="text-[#032555] text-[16px] mb-8 font-semibold">
            We boast of highly skilled and experienced tech <br /> personnel, We
            handle every projects with experience
          </h4>

          <h6 className="text-[14px] mb-2 text-[#656464] font-semibold">
            60% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[57%] rounded-2xl border-[#032555]" />
          <hr className="mb-16 border border-[6px] rounded-2xl w-[700px] border-[#d9e7ff]" />
          <div>

            <div className="mb-3 mt-8 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>What is the price estimate for this project</h3>

            </div>
          </div>
          <div className="">
                <Input name="$1,000 - $3,000+" />
                <Input name="$4,000 - $9,000+" />
                <Input name="$10,000 and above" />
                <Input name="Not decided" />
              </div>
          <section className ='mt-8'>

            <Link to="/stepFive">
              <Button pic={ArrowR} value="Next" className="hire-next-button" />
            </Link>

            <Link to="/stepThree">
              <Button2
                pic={ArrowL}
                value="Previous"
                className="hire-prev-button"
              />
            </Link>
          </section>
        </div>
      </section>

      <div className="mt-5">
        <Logo />
        <Footer />
      </div>
    </div>
  );
}

export default StepThree;
