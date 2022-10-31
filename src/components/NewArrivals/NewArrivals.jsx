import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function NewArrivals({ newRef }) {
  return (
    <section className="section__new-arrivals pt-[7rem] pb-[2rem]" ref={newRef}>
      <div className="containers">
        <h2 className="text-[2.25rem] mb-[3rem] text-white font-semibold text-center">
          New Arrivals
        </h2>
        <Swiper loop={true} slidesPerView={3} spaceBetween={16}>
          <SwiperSlide>
            <div className="flex flex-col items-center group overflow-hidden relative rounded-[1rem] container-color py-[2rem] mr-[16px] min-w-[310px]">
              <div className="absolute top-[8%] left-[8%] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] text-[0.875rem] bg-red text-white">
                New
              </div>
              <img
                className="w-[150px] mb-[1rem] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
                src={require("../../assets/img/new1-img.png")}
                alt="Haunted House"
              />
              <h3 className="text-white text-[1.25rem] font-medium">
                Haunted House
              </h3>
              <p className="text-[#dad8d7] text-[0.875rem] mb-[1rem]">
                Accessory
              </p>
              <div>
                <span className="text-white font-medium mr-[0.5rem]">
                  $14.99
                </span>
                <span className="text-[#f4511f] text-[0.813rem] line-through font-medium">
                  $29.99
                </span>
              </div>
              <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
                <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center group overflow-hidden relative rounded-[1rem] container-color py-[2rem] mr-[16px] min-w-[310px]">
              <div className="absolute top-[8%] left-[8%] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] text-[0.875rem] bg-red text-white">
                New
              </div>
              <img
                className="w-[150px] mb-[1rem] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
                src={require("../../assets/img/new2-img.png")}
                alt="Haunted House"
              />
              <h3 className="text-white text-[1.25rem] font-medium">
                Halloween Candle
              </h3>
              <p className="text-[#dad8d7] text-[0.875rem] mb-[1rem]">
                Accessory
              </p>
              <div>
                <span className="text-white font-medium mr-[0.5rem]">
                  $11.99
                </span>
                <span className="text-[#f4511f] text-[0.813rem] line-through font-medium">
                  $21.99
                </span>
              </div>
              <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
                <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center group overflow-hidden relative rounded-[1rem] container-color py-[2rem] mr-[16px] min-w-[310px]">
              <div className="absolute top-[8%] left-[8%] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] text-[0.875rem] bg-red text-white">
                New
              </div>
              <img
                className="w-[150px] mb-[1rem] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
                src={require("../../assets/img/new3-img.png")}
                alt="Haunted House"
              />
              <h3 className="text-white text-[1.25rem] font-medium">
                Witch Hat
              </h3>
              <p className="text-[#dad8d7] text-[0.875rem] mb-[1rem]">
                Accessory
              </p>
              <div>
                <span className="text-white font-medium mr-[0.5rem]">
                  $4.99
                </span>
                <span className="text-[#f4511f] text-[0.813rem] line-through font-medium">
                  $9.99
                </span>
              </div>
              <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
                <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center group overflow-hidden relative rounded-[1rem] container-color py-[2rem] mr-[16px] min-w-[310px]">
              <div className="absolute top-[8%] left-[8%] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] text-[0.875rem] bg-red text-white">
                New
              </div>
              <img
                className="w-[150px] mb-[1rem] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
                src={require("../../assets/img/new4-img.png")}
                alt="Haunted House"
              />
              <h3 className="text-white text-[1.25rem] font-medium">Rip</h3>
              <p className="text-[#dad8d7] text-[0.875rem] mb-[1rem]">
                Accessory
              </p>
              <div>
                <span className="text-white font-medium mr-[0.5rem]">
                  $24.99
                </span>
                <span className="text-[#f4511f] text-[0.813rem] line-through font-medium">
                  $44.99
                </span>
              </div>
              <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
                <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center group overflow-hidden relative rounded-[1rem] container-color py-[2rem] mr-[16px] min-w-[310px]">
              <div className="absolute top-[8%] left-[8%] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] text-[0.875rem] bg-red text-white">
                New
              </div>
              <img
                className="w-[150px] mb-[1rem] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
                src={require("../../assets/img/new5-img.png")}
                alt="Haunted House"
              />
              <h3 className="text-white text-[1.25rem] font-medium">Rip</h3>
              <p className="text-[#dad8d7] text-[0.875rem] mb-[1rem]">
                Terrifying Crystal Ball
              </p>
              <div>
                <span className="text-white font-medium mr-[0.5rem]">
                  $5.99
                </span>
                <span className="text-[#f4511f] text-[0.813rem] line-through font-medium">
                  $12.99
                </span>
              </div>
              <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
                <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center group overflow-hidden relative rounded-[1rem] container-color py-[2rem] mr-[16px] min-w-[310px]">
              <div className="absolute top-[8%] left-[8%] py-[0.25rem] px-[0.5rem] rounded-[0.25rem] text-[0.875rem] bg-red text-white">
                New
              </div>
              <img
                className="w-[150px] mb-[1rem] group-hover:translate-y-[-10px] group-hover:duration-[0.3s] duration-[0.3s]"
                src={require("../../assets/img/new6-img.png")}
                alt="Haunted House"
              />
              <h3 className="text-white text-[1.25rem] font-medium">Rip</h3>
              <p className="text-[#dad8d7] text-[0.875rem] mb-[1rem]">
                Witch Broom
              </p>
              <div>
                <span className="text-white font-medium mr-[0.5rem]">
                  $7.99
                </span>
                <span className="text-[#f4511f] text-[0.813rem] line-through font-medium">
                  $14.99
                </span>
              </div>
              <div className="h-[36px] w-[36px] cursor-pointer bg-[#f4511f] flex justify-center items-center rounded-[0.25rem] right-[-100px] absolute bottom-[0px] group-hover:right-[-1px] group-hover:bottom-[0px] group-hover:duration-[0.3s] duration-[0.3s]">
                <i className="fa-solid fa-cart-shopping text-[#fff]"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default NewArrivals;
