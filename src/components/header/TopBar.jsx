import React from "react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-center bg-white mt-[60px] py-2 shadow-xl mb-[2px]">
      <div className="lg:w-[1280px] w-full grid md:grid-cols-2 gap-3 grid-cols-1">
        <div className="hidden md:flex md:items-center md:gap-2">
          <p className="text-[#ea0000] font-bold underline">MỚI NHẤT :</p>
          <marquee className="flex-1 text-sm text-right text-grayf3">
            Sheikh Jassim tìm ra cách thuyết phục nhà Glazer Man Utd nhanh chóng
          </marquee>
        </div>
        <ul className="flex items-center gap-2 font-medium md:justify-end sm:w-full justify-evenly">
          <li>M.U</li>
          <li>Arsenal</li>
          <li>Chelsea</li>
          <li>Liverpool</li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
