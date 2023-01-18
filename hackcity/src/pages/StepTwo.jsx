import React from "react";
import man from "../assets/Images/hire/pana (2).png";
import ArrowL from "../assets/Images/hire/ArrowRight (1).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import Button2 from "../components/PrevButton";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import CheckBox from "../components/CheckBox";
import Textarea from "../components/Textarea";

import { Link } from "react-router-dom";

function StepTwo() {
  return (
    <div className="">
      <section className="flex text-center md:flex-row">
        <div className="bg-[#f1f6fd] w-[35%] h-[118vh]">
          <h1 className=" mt-10 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464]">step Two</p>
          <img
            className="w-[550px] top-[-10px] z-20 absolute"
            src={man}
            alt="illustration"
          />
        </div>

        <div className="p-8 text-left ml-10 z-30">
          <h4 className="text-[#032555] text-[16px] mb-8 font-semibold">
            We boast of highly skilled and experienced tech <br /> personnel, We
            handle every projects with experience
          </h4>

          <h6 className="text-[14px] mb-2 text-[#656464] font-semibold">
            20% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[15%] rounded-2xl border-[#032555]" />
          <hr className="mb-12 border border-[6px] rounded-2xl border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>What is the Application/Product Domain?</h3>
            </div>

            <div className="flex md:flex-row justify-between">
              <div className="">
                <CheckBox name="Healthcare and Pharma" />
                <CheckBox name="Technology Company" />
                <CheckBox name="Logistics & Transport" />
                <CheckBox name="Insurance" />
              </div>

              <div className="">
                <CheckBox name="Fintech/Finance" />
                <CheckBox name="Automotive" />
                <CheckBox name="Education" />
                <CheckBox name="Blockchain" />
              </div>
            </div>

            <div className="mb-3 mt-8 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>Others</h3>
            </div>
          </div>

          <section>
            <Textarea />
            <br />

            <Link to="/step-three">
              <Button pic={ArrowR} value="Next" className="hire-next-button" />
            </Link>

            <Link to="/hire">
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

export default StepTwo;
