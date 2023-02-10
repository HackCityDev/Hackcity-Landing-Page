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
    <div className="footer mt-0">
      <div className="py-16 px-4 md:px-8 lg:px-20 grid md:grid-cols-2 md:mt-10 mt-5">
        <div className="">
          <img src={logo} className="w-[30px] mb-5" alt="logo" />
          <p className="text-[15px] text-[#6b7280]">
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

        <div className=" flex flex-col md:flex-row text-[#6b7280] leading-[30px] text-[15px] md:justify-between">
          <div className =''>
            <h4 className="text-[#9ca3af]  ">SOLUTIONS</h4>
            <p>Marketing</p>
            <p>Analytics</p>
            <p>Commerce</p>
            <p>Insights</p>
          </div>

          <div className ='mt-5 md:mt-0'>
            <h4 className="text-[#9ca3af]">SOLUTIONS</h4>
            <p>Marketing</p>
            <p>Analytics</p>
            <p>Commerce</p>
            <p>Insights</p>
          </div>

          <div className ='mr-10 mt-5 md:mt-0 md:mr-0 '>
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
      <hr className="w-[88%] m-auto md:mt-10 border-[#6b7280]" />
      <p className="text-center text-[#9ca3af] py-5 text-[15px]">
        &copy; 2023 HackCity, Inc. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
