import React from "react";
import { Link } from "react-router-dom";

function Join() {
  return (
    <div className="bg-[#fffcf5] mt-10">
      <div className="px-4 md:px-8 lg:px-20 py-5">
        <h5 className="text-[#eb5757] font-semibold ">Join our team</h5>
        <h2 className="text-[30px] font-semibold text-[#032555] leading-[40px] mt-3 mb-5">
          Great Community for <br /> Experienced Developers
        </h2>
        <p className="text-gray-600 text-[17px] font-semibold md:w-[80%]">
          With Hack City Tech., we not only provide startups with the right tech
          team to build their products efficiently, we also provide marketing
          and business operations support/resources.
        </p>
        <Link to="/">
          <button className="button1 mr-10 mt-10">Join us</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
