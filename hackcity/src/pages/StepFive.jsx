import React from "react";
import man from "../assets/Images/hire/rafiki.png";
import ArrowL from "../assets/Images/hire/ArrowRight (1).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import Button2 from "../components/PrevButton";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

import { Link } from "react-router-dom";

function StepFive() {
  return (
    <div className="">
      <section className="flex text-center flex-col lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] h-[70vh] lg:h-[118vh]">
          <h1 className=" mt-12 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464]">Step Five</p>
          <img
            className="w-[400px] lg:w-[550px] m-auto lg:mt-24 z-20 lg:absolute"
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
            80% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[72%] rounded-2xl border-[#032555]" />
          <hr className="mb-12 border border-[6px] rounded-2xl w-[100%] lg:w-[700px] border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>Please fill your credentials</h3>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              <div>
                <div className="mt-5 mb-5 ">
                  <label
                    className="text-[14px] relative top-[-10px]"
                    htmlFor="Full Name"
                  >
                    Full Name
                  </label>
                  <Input name="Healthcare and Pharma" />
                </div>
                <div className="mt-5 mb-5">
                  <label
                    className="text-[14px] relative top-[-10px]"
                    htmlFor="Company Name"
                  >
                    Company Name
                  </label>
                  <Input name="Technology Company" />
                </div>
              </div>

              <div>
                <div className="mt-5 mb-5">
                  <label
                    className="text-[14px] relative top-[-10px]"
                    htmlFor="Work Email"
                  >
                    Work Email
                  </label>
                  <Input name="Fintech/Finance" />
                </div>
                <div className="mt-5 mb-5">
                  <label
                    className="text-[14px] relative top-[-10px]"
                    htmlFor="Position"
                  >
                    Position
                  </label>
                  <Input name="Automotive" />
                </div>
              </div>
            </div>

            <div className="mb-3 mt-0 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>Other Information</h3>
            </div>
          </div>

          <section>
            <Textarea />
            <br />

            <Link to="/step-six">
              <Button pic={ArrowR} value="Next" className="hire-next-button" />
            </Link>

            <Link to="/step-four">
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

export default StepFive;
