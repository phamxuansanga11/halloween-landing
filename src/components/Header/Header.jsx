import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Header({ sliderRef, aboutRef, candyRef, newRef, supportRef }) {
  const headerRef = useRef(null);
  const sliderNavRef = useRef(null);
  const aboutNavRef = useRef(null);
  const candyNavRef = useRef(null);
  const newNavRef = useRef(null);
  const supportNavRef = useRef(null);
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

  useEffect(() => {
    let position;
    window.addEventListener("scroll", () => {
      position = Math.floor(window.pageYOffset);
      if (position > 0) {
        handleClearActiveHeader();
        sliderNavRef.current.classList.add("active");
      }
      if (position > aboutRef.current.offsetTop - 100) {
        handleClearActiveHeader();
        aboutNavRef.current.classList.add("active");
      }
      if (position > candyRef.current.offsetTop - 100) {
        handleClearActiveHeader();
        candyNavRef.current.classList.add("active");
      }
      if (position > newRef.current.offsetTop - 100) {
        handleClearActiveHeader();
        newNavRef.current.classList.add("active");
      }
      if (position > supportRef.current.offsetTop - 100) {
        handleClearActiveHeader();
        supportNavRef.current.classList.add("active");
      }
    });
  }, [aboutRef, candyRef, newRef, supportRef]);

  const handleClearActiveHeader = () => {
    const navLink = document.querySelectorAll(".link");
    navLink.forEach((item) => item.classList.remove("active"));
  };

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

        <ul className="text-primary ml-[auto] flex justify-center gap-x-[3rem] max-md:gap-x-[2rem]">
          <li className="link pb-[6px]" ref={sliderNavRef}>
            <Link
              href="/"
              onClick={() => {
                handleClearActiveHeader();
                sliderNavRef.current.classList.add("active");
                window.scrollTo({
                  top: sliderRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </Link>
          </li>
          <li className="link pb-[6px]" ref={aboutNavRef}>
            <Link
              href="/about"
              className=""
              onClick={() => {
                handleClearActiveHeader();
                aboutNavRef.current.classList.add("active");
                window.scrollTo({
                  top: aboutRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              About
            </Link>
          </li>
          <li className="link pb-[6px]" ref={candyNavRef}>
            <Link
              href="/candy"
              className=""
              onClick={() => {
                handleClearActiveHeader();
                candyNavRef.current.classList.add("active");
                window.scrollTo({
                  top: candyRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Candy
            </Link>
          </li>
          <li className="link pb-[6px]" ref={newNavRef}>
            <Link
              href="/new"
              className=""
              onClick={() => {
                handleClearActiveHeader();
                newNavRef.current.classList.add("active");
                window.scrollTo({
                  top: newRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              New
            </Link>
          </li>
          <li className="links" ref={supportNavRef}>
            <Link
              href="/support"
              className="py-[0.75rem] px-[1.5rem] border-[2px] border-white rounded-[3rem] font-medium max-[993px]:py-[0.6rem] max-[993px]:px-[1rem]"
              onClick={() => {
                handleClearActiveHeader();
                supportNavRef.current.classList.add("active");
                window.scrollTo({
                  top: supportRef.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
