import React from "react";
import why from "../assets/Images/why.png";
import { Link } from "react-router-dom";

function Business() {
  return (
    <div className="flex flex-col mt-10 md:mt-20 items-center md:flex-row px-6 md:px-8 lg:px-20">
      <div className="md:w-[50%]">
        <h5 className="text-[#eb5757] font-semibold ">Why Hire Us</h5>
        <h2 className="text-[25px] md:text-[30px] font-semibold text-[#032555] leading-[40px] mt-3 mb-5">
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

        <Link to="/">
          <button className="button1 mr-10 mt-10">Learn more</button>
        </Link>
      </div>

      <div>
        <img className="max-w-[320px] md:max-w-[330px] lg:max-w-[400px] mb-5 md:mb-0 md:ml-10" src={why} alt="why hire us" />
      </div>
    </div>
  );
}

export default Business;
