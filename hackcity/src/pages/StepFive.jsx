import React, { useState } from "react";
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

function StepFive(callback, id) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const [disable, setDisable] = useState(true);

  function checkIfFielsIsEmpty() {
    const box1 = document.querySelector("#input-box1").value;
    const box2 = document.querySelector("#input-box2").value;
    const box3 = document.querySelector("#input-box3").value;
    const box4 = document.querySelector("#input-box4").value;

    var inputLength1 = box1.trim().length;
    var inputLength2 = box2.trim().length;
    var inputLength3 = box3.trim().length;
    var inputLength4 = box4.trim().length;

    if (
      inputLength1 > 0 &&
      inputLength2 > 0 &&
      inputLength3 > 0 &&
      inputLength4 > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  return (
    <div className="">
      <section className="flex text-center flex-col lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] lg:h-[70vh] lg:h-[118vh]">
          <h1 className=" mt-12 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464] mb-8 lg:mb-0">Step Five</p>
          <img
            className="w-[400px] hidden lg:block lg:w-[550px] m-auto lg:mt-24 z-20 lg:absolute"
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
            80% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[72%] rounded-2xl border-[#032555]" />
          <hr className="mb-12 border border-[6px] rounded-2xl w-[100%] lg:w-[700px] border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="circle"></div>
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
                  <Input
                    className="text-[14px] relative top-[-10px]"
                    id="input-box1"
                    value={input1}
                    callback={(e) => {
                      setInput1(e.target.value);
                      checkIfFielsIsEmpty();
                    }}
                    name="John Jane"
                  />
                </div>

                <div className="mt-5 mb-5">
                  <label
                    className="text-[14px] relative top-[-10px]"
                    htmlFor="Company Name"
                  >
                    Company Name
                  </label>
                  <Input
                    className="text-[14px] relative top-[-10px]"
                    id="input-box2"
                    value={input2}
                    callback={(e) => {
                      setInput2(e.target.value);
                      checkIfFielsIsEmpty();
                    }}
                    name="HACKCITY TECH INC"
                  />
                </div>
              </div>

              <div>
                <div className=" mb-5">
                  <label
                    className="text-[14px] relative top-[-10px]"
                    htmlFor="Work Email"
                  >
                    Work Email
                  </label>
                  <Input
                    className=" text-[14px] relative top-[-10px]"
                    id="input-box3"
                    value={input3}
                    callback={(e) => {
                      setInput3(e.target.value);
                      checkIfFielsIsEmpty();
                    }}
                    name="johnjane@gmail.com"
                  />
                </div>

                <div className="mt-5 mb-5">
                  <label
                    className="text-[14px] relative top-[-10px]"
                    htmlFor="Position"
                  >
                    Position
                  </label>
                  <Input
                    className="text-[14px] relative top-[-10px]"
                    id="input-box4"
                    value={input4}
                    callback={(e) => {
                      setInput4(e.target.value);
                      checkIfFielsIsEmpty();
                    }}
                    name="Director"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3 mt-0 text-[15px] flex items-center">
              <div className="circle"></div>
              <h3>Other Information</h3>
            </div>
          </div>

          <section>
            <Textarea id="message-textarea" type="text" />
            <br />

            {disable ? (
              <div>
                <Button
                  className=" hire-next-button text-center hover:bg-[#032555]  cursor-not-allowed opacity-[0.5]"
                  pic={ArrowR}
                  value="Next"
                />
              </div>
            ) : (
              <div>
                <Link to="/step-six">
                  <Button
                    className=" hire-next-button hire-hover text-center cursor-pointer"
                    pic={ArrowR}
                    value="Next"
                  />
                </Link>
              </div>
            )}

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
