import React from "react";
import arrow from "../assets/Images/ArrowRight.png";

function Join() {
  return (
    <div className="bg-[#fffcf5] mt-10">
      <div className="px-20 py-5">
        <h5 className="text-[#eb5757] font-semibold ">Join our team</h5>
        <h2 className="text-[30px] font-semibold text-[#032555] leading-[40px] mt-3 mb-5">
          Great Community for <br /> Experienced Developers
        </h2>
        <p className="text-gray-600 font-semibold w-[80%]">
          With Hack City Tech., we not only provide startups with the right tech
          team to build their products efficiently, we also provide marketing
          and business operations support/resources.
        </p>
        <button className="bg-[#032555] text-white text-[13px] px-12 py-3 mb-10 mt-10 flex items-center">
          Join us{" "}
          <img className="ml-3 w-[12px] mt-1" src={arrow} alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

export default Join;
