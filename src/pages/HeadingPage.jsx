import React from "react";

const HeadingPage = ({ children = "BÓNG ĐÁ TÂY BAN NHA" }) => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
      <h1 className="bg-[#eee] text-lg md:text-2xl font-bold px-2 py-[10px] grid lg:grid-cols-3 lg:col-span-3">
        {children}
      </h1>
    </div>
  );
};

export default HeadingPage;
