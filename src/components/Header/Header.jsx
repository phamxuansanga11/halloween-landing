import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const headerRef = useRef(null);
  const [activeHeader, setActiveHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 80) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }
    });
  }, []);
  return (
    <header
      className={`h-[80px] ${
        activeHeader && "active"
      } fixed top-0 w-[100%] left-0`}
      ref={headerRef}
    >
      <div className="containers flex items-center h-[100%]">
        <Link to="/">
          <div className="flex">
            <img
              src={require("../../assets/img/logo.png")}
              alt="logo"
              className="w-[20px] h-[20px]"
            />
            <h1 className="text-primary  font-medium ml-[0.5rem]">Halloween</h1>
          </div>
        </Link>

        <ul className="text-primary ml-[auto] flex justify-center gap-x-[3rem]">
          <li>
            <a href="/" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="">
              About
            </a>
          </li>
          <li>
            <a href="/" className="">
              Candy
            </a>
          </li>
          <li>
            <a href="/" className="">
              New
            </a>
          </li>
          <li>
            <a
              href="/"
              className="py-[0.75rem] px-[1.5rem] border-[2px] border-white rounded-[3rem] font-medium"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
