import React from "react";
import man from "../assets/Images/hire/rafiki.png";
import pass from "../assets/Images/hire/Vector (9).png";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

import { Link } from "react-router-dom";

function StepSix() {
  return (
    <div className="">
      <section className="flex text-center flex-col lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] md:h-[70vh] lg:h-[105vh]">
          <h1 className=" mt-12 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464]">Step Six</p>
          <img
            className="w-[400px] lg:w-[550px] m-auto lg:mt-32 z-20 lg:absolute"
            src={man}
            alt="illustration"
          />
        </div>

        <div className="p-4 md:p-8 text-left mt-4 lg:ml-10 z-30">
          <h4 className="text-[#032555] text-[16px] mb-8 font-semibold">
            We boast of highly skilled and experienced tech <br /> personnel, We
            handle every projects with experience
          </h4>

          <h6 className="text-[14px] mb-2 text-[#656464] font-semibold">
            100% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[100%] lg:w-[700px] rounded-2xl border-[#032555]" />
          <hr className="mb-12 border border-[6px] rounded-2xl w-[100%] lg:w-[700px] border-[#d9e7ff]" />

          <div className="flex flex-col items-center">
            <img className="mt-10 w-[150px]" src={pass} alt="completed" />
            <p className="text-center w-[300px] text-[15px] mb-5 mt-4">
              Thank you for reaching out to us with the important details of
              your project. One of the management team will reach out to you
              within 24hours.
            </p>

            <Link to="/">
              <button className="hire-next-button mt-16">Home page</button>
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Logo />
        <Footer />
      </div>
    </div>
  );
}

export default StepSix;
