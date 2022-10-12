import React from "react";

function OurNewsletter(props) {
  return (
    <section className="section__our-newsletter pt-[7rem] pb-[2rem]">
      <div className="containers">
        <div className="grid grid-cols-[.5fr] justify-center">
          <h2 className="text-[2.25rem] mb-[3rem] text-white font-semibold text-center">
            Our Newsletter
          </h2>
          <p className="text-center mb-[1.5rem] text-[#dad8d7]">
            Promotion new products and sales. Directly to <br></br> your inbox
          </p>
          <div className="flex p-[1rem] w-[100%] container-color ml-[auto] mr-[auto] rounded-[0.75rem]">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 text-[0.813rem] bg-transparent text-[#fff] outline-none border-[none]"
            />
            <div className="text-white bg-red rounded-[0.5rem] py-[1rem] px-[1.75rem]">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurNewsletter;
