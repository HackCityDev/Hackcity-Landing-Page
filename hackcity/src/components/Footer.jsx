import React from "react";
import logo from "../assets/Images/logowhite.png";
import instagram from "../assets/Images/instagram.png";
import facebook from "../assets/Images/facebook.png";
import github from "../assets/Images/github.png";
import twitter from "../assets/Images/twitter.png";
import dribbble from "../assets/Images/dribbble.png";
import location from "../assets/Images/location.png";
import phone from "../assets/Images/phone.png";
import message from "../assets/Images/message.png";

function Footer() {
  return (
    <div className="footer mt-10">
      <div className="py-10 px-20 grid grid-cols-2 mt-10">
        <div className="">
          <img src={logo} className="w-[30px] mb-5" alt="logo" />
          <p className="text-[13px] text-[#6b7280]">
            Making the world a better place through <br /> constructing elegant
            hierarchies.
          </p>
          <div className="flex py-5">
            <img className="mr-5 w-[20px]" src={facebook} alt="facebook" />
            <img className="mr-5 w-[20px]" src={instagram} alt="instagram" />
            <img className="mr-5 w-[20px]" src={twitter} alt="twitter" />
            <img className="mr-5 w-[20px]" src={github} alt="github" />
            <img className="mr-5 w-[20px]" src={dribbble} alt="dribble" />
          </div>
        </div>

        <div className=" flex text-[#6b7280] leading-[30px] text-[13px] justify-between">
          <div>
            <h4 className="text-[#9ca3af]  ">SOLUTIONS</h4>
            <p>Marketing</p>
            <p>Analytics</p>
            <p>Commerce</p>
            <p>Insights</p>
          </div>

          <div>
            <h4 className="text-[#9ca3af]">SOLUTIONS</h4>
            <p>Marketing</p>
            <p>Analytics</p>
            <p>Commerce</p>
            <p>Insights</p>
          </div>

          <div>
            <h4 className="text-[#9ca3af]">CONTACT US</h4>
            <div className="flex items-center py-1">
              {" "}
              <img className="w-[18px] h-[18px]" src={message} alt="message" />
              <span className="ml-2">info@waylight.me</span>
            </div>

            <div className="flex items-center py-1">
              {" "}
              <img className="w-[18px] h-[18px]" src={phone} alt="phone" />
              <span className="ml-2">+1-302-467-2761</span>
            </div>

            <div className="flex items-center py-1">
              {" "}
              <img
                className="w-[18px] h-[18px]"
                src={location}
                alt="location"
              />
              <span className="ml-2">7209 Lancaster Pike, Suite 4-1282</span>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <hr className="w-[88%] m-auto mt-10 border-[#6b7280]" />
      <p className="text-center text-[#9ca3af] py-5 text-[13px]">
        &copy; 2023 HackCity, Inc. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
