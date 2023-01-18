import React from "react";
import why from "../assets/Images/why.png";
import arrow from "../assets/Images/ArrowRight.png";

function Business() {
  return (
    <div className="flex flex-col mt-20 items-center md:flex-row px-20">
      <div className="w-[50%]">
        <h5 className="text-[#eb5757] font-semibold ">Why Hire Us</h5>
        <h2 className="text-[30px] font-semibold text-[#032555] leading-[40px] mt-3 mb-5">
          Business Solutions that <br /> will Help You Grow
        </h2>
        <p className="text-gray-600 font-semibold text-[15px]">
          Beyond providing tech. support and development, we also provide tech
          startups with marketing resources and the business operations support
          they need to get their project or company from an idea to a
          product/company.
          <br />
          <br />
          With Hack City Tech., we not only provide such startups with the right
          tech team to build their products efficiently, we also provide
          marketing and business operations support/resources. In addition, we
          provide them with investment and potential business partnership leads
          from our business network.
        </p>

        <button className="bg-[#032555] text-white text-[13px] px-8 py-3 mt-10 flex items-center">
          Learn more{" "}
          <img className="ml-3 w-[12px] mt-1" src={arrow} alt="arrow right" />
        </button>
      </div>

      <div>
        <img className="ml-10" src={why} alt="why hire us" />
      </div>
    </div>
  );
}

export default Business;
