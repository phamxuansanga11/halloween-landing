import React from "react";

function Favorite(props) {
  return (
    <section className="section__favorite pt-[7rem] pb-[2rem]">
      <div className="containers">
        <h2 className="text-center text-[2.2rem] font-semibold text-white mb-[3rem]">
          Favorite Scare <br></br> Category
        </h2>
        <div className="grid grid-cols-3 gap-[8rem]">
          <div>
            <img
              className="w-[200px] m-[auto] hover:translate-y-[-10px] hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/category1-img.png")}
              alt="ghost"
            />
            <h3 className="mb-[0.25rem] font-semibold text-white text-[1.17rem] text-center">
              Ghosts
            </h3>
            <p className="text-[#dad8d7]  text-center">
              Choose the ghosts, the scariest there are.
            </p>
          </div>
          <div>
            <img
              className="w-[200px] m-[auto] hover:translate-y-[-10px] hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/category2-img.png")}
              alt="ghost"
            />
            <h3 className="mb-[0.25rem] font-semibold text-white text-[1.17rem] text-center">
              Pumpkins
            </h3>
            <p className="text-[#dad8d7]  text-center">
              You look at the scariest pumpkins there is.
            </p>
          </div>
          <div>
            <img
              className="w-[200px] m-[auto] hover:translate-y-[-10px] hover:duration-[0.3s] duration-[0.3s]"
              src={require("../../assets/img/category3-img.png")}
              alt="ghost"
            />
            <h3 className="mb-[0.25rem] font-semibold text-white text-[1.17rem] text-center">
              Witch Hat
            </h3>
            <p className="text-[#dad8d7]  text-center">
              Pick the most stylish witch hats out there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favorite;
