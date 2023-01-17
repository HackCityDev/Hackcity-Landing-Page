import React from "react";
import logo from "../assets/Images/logo.png";
import "../styles/home.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <div className="navbar flex flex-row items-center justify-between mx-8 my-5 md: px-14">
        <div className="logo">
          <img className="md:w-[100px]" src={logo} alt="hackcity logo" />
        </div>

        <div className="nav-list list-none text-[15px] flex flex-row justify-center text-gray-600">
          <li className="md:px-4">Services </li>
          <li className="md:px-4">Career</li>
          <li className="md:px-4">Contact us</li>
        </div>

        <div className="nav-button">
          <Link to="/hire">
            <button className="bg-[#eb5757] text-white text-[13px] py-2 px-3 rounded-[17px] hover:bg-gray-900 hover:text-white">
              Hire Developers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
