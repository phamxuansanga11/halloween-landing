import React from "react";

function Footer(props) {
  return (
    <footer className="relative pt-[7rem] pb-[2rem]">
      <img
        className="w-[100px] absolute top-[6rem] right-[-2rem] xl:w-[120px]"
        src={require("../../assets/img/footer1-img.png")}
        alt="ghost halloween"
      />
      <img
        className="w-[150px] absolute bottom-0 left-[15%] right-[initial] xl:w-[180px] xl:top-[30%] xl:left-[-3%]"
        src={require("../../assets/img/footer2-img.png")}
        alt="ghost halloween"
      />
      <div className="containers">
        <div className="grid grid-cols-4 gap-[1rem] justify-items-center">
          <div>
            <div className="flex mb-[1rem]">
              <img
                src={require("../../assets/img/logo.png")}
                alt="halloween"
                className="w-[20px]"
              />
              <h2 className="text-primary  font-medium ml-[0.5rem]">
                Halloween
              </h2>
            </div>
            <p className="mb-[2.5rem] text-[#dad8d7]">
              Enjoy the scariest night <br></br> of your life.
            </p>
            <div className="flex ">
              <a
                href="/"
                className="p-[0.25rem] container-color text-[1rem] text-white rounded-[0.25rem] mr-[0.75rem]"
              >
                <i className="fa-brands fa-facebook-f text-[12px] w-[16px] h-[16px] !flex justify-center items-center"></i>
              </a>
              <a
                href="/"
                className="p-[0.25rem] container-color text-[1rem] text-white rounded-[0.25rem] mr-[0.75rem]"
              >
                <i className="fa-brands fa-instagram text-[12px] w-[16px] h-[16px] !flex justify-center items-center"></i>
              </a>
              <a
                href="/"
                className="p-[0.25rem] container-color text-[1rem] text-white rounded-[0.25rem] mr-[0.75rem]"
              >
                <i className="fa-brands fa-twitter text-[12px] w-[16px] h-[16px] !flex justify-center items-center"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[1.25rem] mb-[1rem] text-white font-semibold">
              About
            </h3>
            <ul>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  About Us
                </a>
              </li>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  Features
                </a>
              </li>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[1.25rem] mb-[1rem] text-white font-semibold">
              Our Services
            </h3>
            <ul>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  Pricing
                </a>
              </li>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  Discounts
                </a>
              </li>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  Shipping mode
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[1.25rem] mb-[1rem] text-white font-semibold">
              Our Company
            </h3>
            <ul>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  Blog
                </a>
              </li>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  About us
                </a>
              </li>
              <li className="mb-[0.35rem]">
                <a href="/" className="text-[#dad8d7] text-[0.875rem]">
                  Our mision
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[0.813rem] mt-[6rem] text-[#dad8d7] text-center">
          © Bedimcode. All rigths reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
