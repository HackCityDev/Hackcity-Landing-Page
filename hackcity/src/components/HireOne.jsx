import React from "react";
import man from "../assets/Images/hire/pana (3).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";

import Footer from "./Footer";
import Logo from "./Logo";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

function HireOne() {
  return (
    <div className="">
      <section className="flex text-center md:flex-row">
        <div className="bg-[#f1f6fd] w-[35%] h-[100vh]">
          <h1 className=" mt-10 text-[#032555] text-[20px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[12px]">step one</p>
          <img
            className="w-[550px] mt-12 z-20 absolute"
            src={man}
            alt="illustration"
          />
        </div>

        <div className="p-8 text-left ml-10 z-30">
          <h4 className="text-[#032555] text-[16px] mb-8 font-semibold">
            We boast of highly skilled and experienced tech <br /> personnel, We
            handle every projects with experience
          </h4>

          <h6 className="text-[14px] mb-2 text-[#656464] font-semibold">0% Completed</h6>
          <hr className="mb-12 border border-[5px] rounded border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>
                {" "}
                What can{" "}
                <span className="text-[#656464] font-bold">
                  {" "}
                  Hack City Tech{" "}
                </span>{" "}
                do for you?
              </h3>
            </div>

            <div className="flex md:flex-row justify-between">
              <div className="">
                <Input name="SaaS (Software as a Service) Development" />
                <Input name="Mobile App Development" />
                <Input name="MVP Development" />
                <Input name="Blockchain Application" />
                <Input name="Training" />
              </div>

              <div className="">
                <Input name="Web Application Development" />
                <Input name="API Development" />
                <Input name="UI\UX Design" />
                <Input name="Smart contract" />
                <Input name="Consultation" />
              </div>
            </div>

            <div className="mb-3 mt-8 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>
                {" "}
                What can{" "}
                <span className="text-[#656464] font-bold">
                  {" "}
                  Hack City Tech{" "}
                </span>{" "}
                do for you?
              </h3>
            </div>
          </div>

          <section>
            <Textarea />
            <br />
            <Button pic={ArrowR} id ='hire-next-button' />
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

export default HireOne;
