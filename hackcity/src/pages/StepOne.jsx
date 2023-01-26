import React from "react";
import man from "../assets/Images/hire/pana (3).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import CheckBox from "../components/CheckBox";
import Textarea from "../components/Textarea";

function StepOne({ status, handleOption, handleChange }) {
  return (
    <div className="">
      <section className="flex flex-col text-center lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] h-[100vh]">
          <h1 className=" mt-10 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464]">step One</p>
          <img
            className="w-[400px] m-auto lg:w-[550px] mt-4 lg:mt-12 z-20 lg:absolute"
            src={man}
            alt="illustration"
          />
        </div>

        <div className="p-8 text-left mt-10 lg:mt-0 lg:ml-10 z-30">
          <h4 className="text-[#032555] text-[16px] mb-8 font-semibold">
            We boast of highly skilled and experienced tech <br /> personnel, We
            handle every projects with experience.
          </h4>

          <h6 className="text-[14px] mb-2 text-[#656464] font-semibold">
            0% Completed
          </h6>
          <hr className="mb-12 border border-[5px] rounded border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl "></div>
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

            <div className="flex flex-col md:flex-row justify-between">
              <div className="">
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                 
                  title="SaaS (Software as a Service) Development"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  
                  title="Mobile App Development"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="MVP Development"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Blockchain Application"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Training"
                />
              </div>

              <div className="">
                <CheckBox
                  title="Web Application Development"
                  status={status}
                  handleOption={handleOption}
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="API Development"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="UI\UX Design"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Smart contract"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Consultation"
                />
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
         
            <Textarea 
           status ={status}
           handleChange = {handleChange}
            
            />
            <br />

            {!status ? (
              <div>
                <Button
                  className=" hire-next-button text-center hover:bg-[#032555]  cursor-not-allowed opacity-[0.5]"
                  pic={ArrowR}
                  value="Next"
                />
              </div>
            ) : (
              <div>
                <Link to="/step-two">
                  <Button
                    className=" hire-next-button hire-hover text-center cursor-pointer"
                    pic={ArrowR}
                    value="Next"
                  />
                </Link>
              </div>
            )}
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

export default StepOne;
