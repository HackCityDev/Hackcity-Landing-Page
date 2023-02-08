import React, { useState } from "react";
import man from "../assets/Images/hire/rafiki.png";
import ArrowL from "../assets/Images/hire/ArrowRight (1).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import Button2 from "../components/PrevButton";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import Radio from "../components/Radio";

import { Link } from "react-router-dom";

function StepFour() {
  const [checkbox, setCheckbox] = useState(false);

  function checkIfFielsIsEmpty() {
    const file = document.querySelectorAll(".check");

    let checkedCount = 0;
    file.forEach((element) => {
      if (element.checked) {
        checkedCount++;
      }
    });

    if (checkedCount === 0) {
      setCheckbox(false);
    } else {
      setCheckbox(true);
    }
  }

  return (
    <div className="">
      <section className="flex text-center flex-col lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] md:h-[70vh] lg:h-[118vh]">
          <h1 className=" mt-12 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464]">step Four</p>
          <img
            className="w-[400px] hidden md:block m-auto lg:w-[550px] lg:mt-24 z-20 lg:absolute"
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
            60% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[57%] rounded-2xl border-[#032555]" />
          <hr className="mb-16 border border-[6px] rounded-2xl w-[100%] lg:w-[700px] border-[#d9e7ff]" />
          <div>
            <div className="mb-3 mt-8 text-[15px] flex items-center">
              <div className="circle"></div>
              <h3>What is the price estimate for this project</h3>
            </div>
          </div>
          <div className="">
            <Radio
              name="group3"
              className="check mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="$1,000 - $3,000+"
            />

            <Radio
              name="group3"
              className="check mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="$4,000 - $9,000+"
            />

            <Radio
              name="group3"
              className="check mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="$10,000 and above"
            />

            <Radio
              name="group3"
              className="check mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="Not decided"
            />
          </div>
          <section className="mt-8">
            {!checkbox ? (
              <div>
                <Button
                  className=" hire-next-button text-center hover:bg-[#032555]  cursor-not-allowed opacity-[0.5]"
                  pic={ArrowR}
                  value="Next"
                />
              </div>
            ) : (
              <div>
                <Link to="/step-five">
                  <Button
                    className=" hire-next-button hire-hover text-center cursor-pointer"
                    pic={ArrowR}
                    value="Next"
                  />
                </Link>
              </div>
            )}

            <Link to="/step-three">
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

export default StepFour;
