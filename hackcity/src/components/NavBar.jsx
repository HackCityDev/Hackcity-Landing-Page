import React from "react";
import logo from "../assets/Images/logo.png";
import arrow from "../assets/Images/arrowDown.png";
import "../styles/home.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <div className="navbar flex flex-row items-center justify-between py-6 px-6 md:mx-8 md:my-5 md:px-14">
        <div className="logo">
          <img
            className="w-[90px] md:w-[100px]"
            src={logo}
            alt="hackcity logo"
          />
        </div>

        <div className="nav-list list-none text-[13px] md:text-[15px] flex flex-row justify-center text-gray-600">
          <li className=" flex items-center px-2 md:px-4">
            Services{" "}
            <img src={arrow} className="ml-1 w-[8px] h-[6px] " alt="" />
          </li>
          <li className="px-2 md:px-4">Career</li>
          <li className="px-2 md:px-4">Contact us</li>
        </div>

        <div className="nav-button">
          <Link to="/hire">
            <button className="bg-[#eb5757] py-2 px-2 text-[12px] text-white md:text-[13px] md:py-2 md:px-3 rounded-[17px] hover:bg-gray-900 hover:text-white">
              Hire Developers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
