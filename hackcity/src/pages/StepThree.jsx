import React from "react";
import man from "../assets/Images/hire/pana.png";
import ArrowL from "../assets/Images/hire/ArrowRight (1).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import Button2 from "../components/PrevButton";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import CheckBox from "../components/CheckBox";

import { Link } from "react-router-dom";


function StepThree() {
  return (
    <div className="">
      <section className="flex flex-col text-center lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] h-[80vh] lg:h-[118vh]">
          <h1 className=" mt-12 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464]">step Three</p>
          <img
            className="w-[400px] m-auto lg:w-[550px] lg:mt-24 z-20 lg:absolute"
            src={man}
            alt="illustration"
          />
        </div>

        <div className="p-8 text-left mt-4 lg:ml-10 z-30">
          <h4 className="text-[#032555] text-[16px] mb-8 font-semibold">
            We boast of highly skilled and experienced tech <br /> personnel, We
            handle every projects with experience
          </h4>

          <h6 className="text-[14px] mb-2 text-[#656464] font-semibold">
            40% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[40%] rounded-2xl border-[#032555]" />
          <hr className="mb-12 border border-[6px] rounded-2xl w-[100%] border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>Which best describes your requirement/engagement timeline?</h3>
            </div>

            <div className="">
              <div className="">
                <CheckBox name="Short Term (Up to 3 months)" />
                <CheckBox name="Medium Term (3 to 6 Months)" />
                <CheckBox name="Long Term (More than 6 months)" />
              </div>

            
            </div>

            <div className="mb-3 mt-8 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>When are you likely to start this project?</h3>

            </div>
          </div>
          <div className="">
                <CheckBox name="Immediately" />
                <CheckBox name="Within 2 weeks" />
                <CheckBox name="Within a month" />
                <CheckBox name="Not decided" />
              </div>
          <section className ='mt-8'>

            <Link to="/step-four">
              <Button pic={ArrowR} value="Next" className="hire-next-button" />
            </Link>

            <Link to="/step-two">
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
