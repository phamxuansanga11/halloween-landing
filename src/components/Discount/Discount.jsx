import React from "react";

function Discount(props) {
  return (
    <section className="section__discount pt-[7rem] pb-[2rem] ">
      <div className="containers">
        <div className="grid grid-cols-2 gap-[7rem] justify-center items-center py-[3rem] container-color rounded-[3rem]">
          <img
            src={require("../../assets/img/discount-img.png")}
            alt="discount"
            className="w-[350px] ml-[auto]"
          />
          <div className="flex flex-col items-center mr-[auto]">
            <p className="text-white text-[1.5rem] mb-[2rem] font-semibold text-center">
              50% Discount <br></br> On New Products
            </p>
            <div className="px-[1.75rem] py-[1rem] rounded-[0.5rem] text-white bg-[#f4511f] duration-[0.3s] hover:duration-[0.3s] hover:bg-[#f4420b] w-[fit-content] select-none cursor-pointer">
              Go to new
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
