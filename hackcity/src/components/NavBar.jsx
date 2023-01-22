import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import arrow from "../assets/Images/arrowDown.png";
import "../styles/home.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div id="navbar">
      <div className="navbar flex flex-row items-center justify-between py-4 px-6 md:px-8 md:my-2 lg:px-24">
        <div className="logo">
          <img
            className="w-[120px] md:w-[100px]"
            src={logo}
            alt="hackcity logo"
          />
        </div>

        <div className="nav-list list-none text-[13px] md:text-[15px] hidden md:flex flex-row justify-center text-gray-600">
          <div className="dropdown">
            <li className=" flex items-center px-2 md:px-4 hover:text-[#000] cursor-pointer">
              Services{" "}
              <img src={arrow} className="ml-1 w-[8px] h-[6px] " alt="" />
            </li>
            <div className="dropdown-content">
              <p className="hover:bg-[#eee] mb-1 px-1 text-center cursor-pointer">
                Consultation
              </p>
              <p className="hover:bg-[#eee] mb-1 px-1 text-center cursor-pointer">
                Training
              </p>
              <p className="hover:bg-[#eee] mb-1 px-1 text-center cursor-pointer">
                App Development
              </p>
            </div>
          </div>

          <li className="px-2 md:px-4 hover:text-[#000] cursor-pointer">
            Career
          </li>
          <li className="px-2 md:px-4 hover:text-[#000] cursor-pointer">
            Contact us
          </li>
        </div>

        <div className="nav-button hidden md:block">
          <Link to="/hire">
            <button className="bg-[#eb5757] py-3 px-4 text-[13px] text-white rounded-[15px] hover:bg-gray-900 hover:text-white">
              Hire Developers
            </button>
          </Link>
        </div>

        <div className="flex md:hidden">
          <div
            className="space-y-2 "
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <span className="block w-[28px] py-0 h-[2px] bg-gray-600"></span>
            <span className="block w-[30px] py-0 h-[2px] bg-gray-600"></span>
            <span className="block w-[30px] py-0 h-[2px] bg-gray-600"></span>
          </div>
        </div>
      </div>

      <div className={isNavExpanded ? "block" : "hidden"}>
        <div className="nav-list z-20 list-none text-[14px] flex flex-col items-center text-gray-600">
          <div className="dropdown">
            <li className=" flex items-center py-4 md:hidden hover:text-[#000] cursor-pointer">
              Services{" "}
              <img
                src={arrow}
                className="ml-1 w-[8px] h-[6px] "
                alt="dropdown"
              />
            </li>
            <div className="dropdown-content">
              <p className="hover:bg-[#eee] mb-1 px-1 text-center cursor-pointer">
                Consultation
              </p>
              <p className="hover:bg-[#eee] mb-1 px-1 text-center cursor-pointer">
                Training
              </p>
              <p className="hover:bg-[#eee] mb-1 px-1 text-center cursor-pointer">
                App Development
              </p>
            </div>
          </div>

          <li className="py-4 md:hidden hover:text-[#000] cursor-pointer">
            Career
          </li>
          <li className="py-4 md:hidden hover:text-[#000] cursor-pointer">
            Contact us
          </li>
        </div>

        <div className="nav-button md:hidden flex flex-col items-center py-8">
          <Link to="/hire">
            <button className="bg-[#eb5757] py-3 px-4 text-[13px] text-white rounded-[15px] hover:bg-gray-900 hover:text-white">
              Hire Developers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
