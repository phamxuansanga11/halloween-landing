import React from "react";

function BtnBackToTop(props) {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={handleScrollTop}
      className="w-[30px] h-[30px] rounded-[0.25rem] container-color flex justify-center items-center fixed right-[25px] bottom-[40px] z-[99] cursor-pointer"
    >
      <i className="fa-sharp fa-solid fa-arrow-up text-white "></i>
    </div>
  );
}

export default BtnBackToTop;
