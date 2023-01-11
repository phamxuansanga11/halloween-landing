import React from "react";

function TrickOrTreat({ candyRef }) {
  return (
    <section
      className="section__trickortreat pt-[7rem] pb-[2rem]"
      ref={candyRef}
    >
      <div className="containers">
        <h2 className="text-center text-white mb-[3rem] text-[2.25rem] font-semibold">
          Trick Or Treat
        </h2>
        <div className="grid gridtemplatecolumns__three gap-[3.5rem] justify-center">
          <div className="group relative overflow-hidden flex flex-col items-center pt-[2rem] pb-[1rem] rounded-[1.5rem] container-color">
            <img
              className="w-[110px] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/trick-treat1-img.png")}
              alt=""
            />
            <h3 className="text-[1.25rem] text-white font-medium">Toffee</h3>
            <p className="text-[0.813rem] mb-[0.5rem] text-[#ccc]">Candy</p>
            <p className="text-[#ffffff] font-medium text-[1rem]">$11.99</p>
            <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
              <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
            </div>
          </div>
          <div className="group relative overflow-hidden flex flex-col items-center pt-[2rem] pb-[1rem] rounded-[1.5rem] container-color">
            <img
              className="w-[110px] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/trick-treat2-img.png")}
              alt=""
            />
            <h3 className="text-[1.25rem] text-white font-medium">Bone</h3>
            <p className="text-[0.813rem] mb-[0.5rem] text-[#ccc]">Accessory</p>
            <p className="text-[#ffffff] font-medium text-[1rem]">$8.99</p>
            <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
              <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
            </div>
          </div>
          <div className="group relative overflow-hidden flex flex-col items-center pt-[2rem] pb-[1rem] rounded-[1.5rem] container-color">
            <img
              className="w-[110px] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/trick-treat3-img.png")}
              alt=""
            />
            <h3 className="text-[1.25rem] text-white font-medium">Scarecrow</h3>
            <p className="text-[0.813rem] mb-[0.5rem] text-[#ccc]">Accessory</p>
            <p className="text-[#ffffff] font-medium text-[1rem]">$15.99</p>
            <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
              <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
            </div>
          </div>
          <div className="group relative overflow-hidden flex flex-col items-center pt-[2rem] pb-[1rem] rounded-[1.5rem] container-color">
            <img
              className="w-[110px] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/trick-treat4-img.png")}
              alt=""
            />
            <h3 className="text-[1.25rem] text-white font-medium">
              Candy Cane
            </h3>
            <p className="text-[0.813rem] mb-[0.5rem] text-[#ccc]">Candy</p>
            <p className="text-[#ffffff] font-medium text-[1rem]">$7.99</p>
            <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
              <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
            </div>
          </div>
          <div className="group relative overflow-hidden flex flex-col items-center pt-[2rem] pb-[1rem] rounded-[1.5rem] container-color">
            <img
              className="w-[110px] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/trick-treat5-img.png")}
              alt=""
            />
            <h3 className="text-[1.25rem] text-white font-medium">Pumpkin</h3>
            <p className="text-[0.813rem] mb-[0.5rem] text-[#ccc]">Candy</p>
            <p className="text-[#ffffff] font-medium text-[1rem]">$19.99</p>
            <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
              <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
            </div>
          </div>
          <div className="group relative overflow-hidden flex flex-col items-center pt-[2rem] pb-[1rem] rounded-[1.5rem] container-color hover:">
            <img
              className="w-[110px] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/trick-treat6-img.png")}
              alt=""
            />
            <h3 className="text-[1.25rem] text-white font-medium">Ghost</h3>
            <p className="text-[0.813rem] mb-[0.5rem] text-[#ccc]">Accessory</p>
            <p className="text-[#ffffff] font-medium text-[1rem]">$17.99</p>
            <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
              <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrickOrTreat;
