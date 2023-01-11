import React from "react";

function AboutHalloween({ aboutRef }) {
  return (
    <section
      className="section__abouthalloween pt-[7rem] pb-[2rem]"
      ref={aboutRef}
    >
      <div className="containers">
        <div className="grid grid-cols-2 gap-[7rem]">
          <div>
            <h2 className="text-[2.25rem] mb-[3rem] text-white font-semibold">
              About Halloween <br></br> Night
            </h2>
            <p className="text-[#dad8d7] mb-[2rem]">
              Night of all the saints, or all the dead, is celebrated on October
              31 and it is a very fun international celebration, this
              celebration comes from ancient origins, and is already celebrated
              by everyone.
            </p>
            <div className="px-[1.75rem] py-[1rem] text-white bg-[#f4511f] rounded-[0.5rem] w-[fit-content] keyframes-wiggle">
              Know more
            </div>
          </div>
          <div>
            <img
              className="w-[350px] animations"
              src={require("../../assets/img/about-img.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHalloween;
