import React, { useState } from "react";
import man from "../assets/Images/hire/pana.png";
import ArrowL from "../assets/Images/hire/ArrowRight (1).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import Button2 from "../components/PrevButton";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import Radio from "../components/Radio";

import { Link } from "react-router-dom";

function StepThree(value, callback) {
  const [checkbox, setCheckbox] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  function checkIfFielsIsEmpty() {
    const checkboxes = document.querySelectorAll(".check");
    const checkboxes2 = document.querySelectorAll(".check2");

    let checkedCount = 0;
    checkboxes.forEach((element) => {
      if (element.checked) {
        checkedCount++;
      }
    });
    let checkedCount2 = 0;
    checkboxes2.forEach((element) => {
      if (element.checked) {
        checkedCount2++;
      }
    });

    if (checkedCount > 0 && checkedCount2 > 0) {
      setCheckbox(true);
      setCheckbox2(true);
    } else {
      setCheckbox(false);
      setCheckbox2(false);
    }
  }
  return (
    <div className="">
      <section className="flex flex-col text-center lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] lg:h-[80vh] lg:h-[118vh]">
          <h1 className=" mt-12 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464] mb-8 lg:mb-0">step Three</p>
          <img
            className="w-[400px] m-auto hidden lg:block lg:w-[550px] lg:mt-24 z-20 lg:absolute"
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
            40% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[40%] rounded-2xl border-[#032555]" />
          <hr className="mb-12 border border-[6px] rounded-2xl w-[100%] border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="circle"></div>
              <h3>
                Which best describes your requirement/engagement timeline?
              </h3>
            </div>

            <div className="">
              <div className="">
                <Radio
                  name="group1"
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Short Term (Up to 3 months)"
                />

                <Radio
                  name="group1"
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Medium Term (3 to 6 Months)"
                />

                <Radio
                  name="group1"
                  className="check mr-3 ml-2 border"
                  callback={(e) => {
                    setCheckbox(e.target.value);
                    checkIfFielsIsEmpty();
                  }}
                  value="Long Term (More than 6 months)"
                />
              </div>
            </div>

            <div className="mb-3 mt-8 text-[15px] flex items-center">
              <div className="circle"></div>
              <h3>When are you likely to start this project?</h3>
            </div>
          </div>
          <div className="">
            <Radio
              name="group2"
              className="check2 mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox2(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="Immediately"
            />

            <Radio
              name="group2"
              className="check2 mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox2(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="Within 2 weeks"
            />

            <Radio
              name="group2"
              className="check2 mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox2(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="Within a month"
            />

            <Radio
              name="group2"
              className="check2 mr-3 ml-2 border"
              callback={(e) => {
                setCheckbox2(e.target.value);
                checkIfFielsIsEmpty();
              }}
              value="Not decided"
            />
          </div>
          <section className="mt-8">
            {!checkbox && !checkbox2 ? (
              <div>
                <Button
                  className=" hire-next-button text-center hover:bg-[#032555]  cursor-not-allowed opacity-[0.5]"
                  pic={ArrowR}
                  value="Next"
                />
              </div>
            ) : (
              <div>
                <Link to="/step-four">
                  <Button
                    className=" hire-next-button hire-hover text-center cursor-pointer"
                    pic={ArrowR}
                    value="Next"
                  />
                </Link>
              </div>
            )}

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
