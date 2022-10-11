import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Pagination } from "swiper";

function Slider(props) {
  return (
    <div className="containers">
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[3rem] pt-[9rem] h-[627px]">
            <div className="relative">
              <img
                src={require("../../assets/img/home1-img.png")}
                alt="slider1"
                className="h-[420px] flex m-[auto]"
              />
              <div className="text-white text-right absolute bottom-0 right-[58%]">
                <p className="text-[0.875rem] font-semibold">
                  The Labu “Reiza”
                </p>
                <span className="text-[#ccc] text-[0.875rem]">
                  The Living Pumpkin
                </span>
              </div>
              <div className="line__white  absolute bottom-[15%] left-[45%]"></div>
            </div>
            <div>
              <h2 className="text-primary text-[1.25rem] uppercase font-semibold mb-[1rem]">
                #1 Top Scariest Ghost
              </h2>
              <div className="flex flex-col text-[4rem] font-bold leading-[4.4rem] text-primary mb-[1.5rem]">
                <span>UOOOO</span>
                <span>TRICK OR</span>
                <span>TREAT!!</span>
              </div>
              <p className="text-[#ccc] mb-[4rem]">
                Hi, I'm Reiza, people call me "El Labu". I am currently trying
                to learn something new, building my own bike with parts made
                only in Malaysia.
              </p>
              <div className="flex justify-between items-center">
                <div className="px-[28px] py-[16px] rounded-[0.5rem] bg-red text-primary cursor-pointer">
                  Book Now
                </div>
                <div className="text-primary">
                  Track Record{" "}
                  <i className="fa-solid fa-arrow-right ml-[0.5rem]"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[3rem] pt-[9rem] h-[627px]">
            <div className="relative">
              <img
                src={require("../../assets/img/home2-img.png")}
                alt="slider1"
                className="h-[420px] flex m-[auto]"
              />
              <div className="text-white text-right absolute bottom-0 right-[58%]">
                <p className="text-[0.875rem] font-semibold">
                  The Labu “Reiza”
                </p>
                <span className="text-[#ccc] text-[0.875rem]">
                  The Living Pumpkin
                </span>
              </div>
              <div className="line__white  absolute bottom-[15%] left-[45%]"></div>
            </div>
            <div>
              <h2 className="text-primary text-[1.25rem] uppercase font-semibold mb-[1rem]">
                #2 top Best duo
              </h2>
              <div className="flex flex-col text-[4rem] font-bold leading-[4.4rem] text-primary mb-[1.5rem]">
                <span>BRING BACK</span>
                <span>MY COTTON</span>
                <span>CANDY</span>
              </div>
              <p className="text-[#ccc] mb-[4rem]">
                Adino steals cotton candy from his brother and eats them all in
                one bite, a hungry beast. Grahami can no longer contain his
                anger towards Adino.
              </p>
              <div className="flex justify-between items-center">
                <div className="px-[28px] py-[16px] rounded-[0.5rem] bg-red text-primary cursor-pointer">
                  Book Now
                </div>
                <div className="text-primary">
                  Track Record{" "}
                  <i className="fa-solid fa-arrow-right ml-[0.5rem]"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-[3rem] pt-[9rem] h-[627px]">
            <div className="relative">
              <img
                src={require("../../assets/img/home3-img.png")}
                alt="slider1"
                className="h-[381px] flex m-[auto]"
              />
              <div className="text-white text-right absolute bottom-0 right-[58%]">
                <p className="text-[0.875rem] font-semibold">
                  The Labu “Reiza”
                </p>
                <span className="text-[#ccc] text-[0.875rem]">
                  The Living Pumpkin
                </span>
              </div>
              <div className="line__white  absolute bottom-[15%] left-[45%]"></div>
            </div>
            <div>
              <h2 className="text-primary text-[1.25rem] uppercase font-semibold mb-[1rem]">
                #3 Top Scariest Ghost
              </h2>
              <div className="flex flex-col text-[4rem] font-bold leading-[4.4rem] text-primary mb-[1.5rem]">
                <span>RESPAWN </span>
                <span> THE SPOOKY </span>
                <span> SKULL</span>
              </div>
              <p className="text-[#ccc] mb-[4rem]">
                In search for cute little puppy, Captain Sem has come back from
                his tragic death. With his hogwarts certified power he promise
                to be a hero for all of ghostkind.
              </p>
              <div className="flex justify-between items-center">
                <div className="px-[28px] py-[16px] rounded-[0.5rem] bg-red text-primary cursor-pointer">
                  Book Now
                </div>
                <div className="text-primary">
                  Track Record
                  <i className="fa-solid fa-arrow-right ml-[0.5rem]"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
