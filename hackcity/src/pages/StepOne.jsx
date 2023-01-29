import React, { useState } from "react";
import man from "../assets/Images/hire/pana (3).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import CheckBox from "../components/CheckBox";
import Textarea from "../components/Textarea";

function StepOne({ value, callback }) {
  const [checkbox, setCheckbox] = useState(false);
  const [text, setText] = useState("");

  function checkIfFielsIsEmpty() {
    const file = document.querySelectorAll(".check");
    const message = document.querySelector("#message").value;

    let checkedCount = 0;
    file.forEach((element) => {
      if (element.checked) {
        checkedCount++;
      }
    });

    var msgLength = message.trim().length;

    if (checkedCount === 0 && msgLength === 0) {
      setCheckbox(false);
    } else {
      setCheckbox(true);
    }
  }

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
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="SaaS (Software as a Service) Development"
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Mobile App Development"
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="MVP Development"
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Blockchain Application"
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Training"
                />
              </div>

              <div className="">
                <CheckBox
                  value="Web Application Development"
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="API Development"
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="UI\UX Design"
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Smart contract"
                />

                <CheckBox
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Consultation"
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
              id="message"
              type="text"
              callback={(e) => {
                setText(e.target.value);
                checkIfFielsIsEmpty();
              }}
            />
            <br />

            {!checkbox && !text ? (
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
