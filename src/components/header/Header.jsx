import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [toggleNav, setToggelNav] = useState(false);
  return (
    <header className="bg-[#1C1E53] text-white">
      <div className="container mx-auto flex gap-6 h-20 items-center  justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-[40px] text-[#BBBBCB] justify-center items-center">
          <ul
            className={`flex gap-6 justify-center items-center duration-300 max-[700px]:fixed max-[700px]:z-[999] max-[700px]:w-[70%] max-[700px]:top-0  max-[700px]:h-screen max-[700px]:bg-[#2b2e69]  max-[700px]:flex-col ${
              toggleNav ? "max-[700px]:left-[0]" : "max-[700px]:-left-[70%]"
            }`}
          >
            <li>
              <NavLink
                onClick={() => setToggelNav(false)}
                className="header__link"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setToggelNav(false)}
                className="header__link"
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setToggelNav(false)}
                className="header__link"
                to={"/pricing"}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setToggelNav(false)}
                className="header__link"
                to={"/work"}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setToggelNav(false)}
                className="header__link"
                to={"/blog"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setToggelNav(false)}
                className="header__link"
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setToggelNav(false)}
                className="header__link border-[2px] w-[185px] h-[60px] flex justify-center items-center rounded-[41px] border-[#BBBBCB] text-white"
                to={"/contactUs"}
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
          <button
            onClick={() => setToggelNav((p) => !p)}
            className="hidden max-[700px]:block"
          >
            <IoIosMenu className="w-[40px] h-[40px]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
