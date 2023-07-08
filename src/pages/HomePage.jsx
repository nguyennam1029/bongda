import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/heading/Heading";
import HotProduct from "../components/product/HotProduct";
import FootballGenre from "../components/footballGenre/FootballGenre";
import FootballGrid from "../components/footballGenre/FootballGrid";
import RightColumnHome from "../components/content/RightColumnHome";
import LeftColumnHome from "../components/content/LeftColumnHome";
import ContentHomePage from "../components/content/ContentHomePage";

const litsImage = [
  {
    src: "Arsenal.png",
  },
  {
    src: "Acmilan.png",
  },
  ,
  { src: "AS-roman.png" },
  { src: "Barcelona.png" },
  { src: "Chelsea.png" },
  { src: "Liverpool.png" },
  { src: "ManCity.png" },
  { src: "MU.png" },
  { src: "Real_madrid.png" },
  { src: "Tottenham_hotspur.png" },
];

const HomePage = () => {
  return (
    <div>
      <marquee className="block lg:hidden">
        <div className="flex items-center justify-around">
          {litsImage.map((item) => (
            <Link to="/" key={item.src}>
              <img src={item.src} className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </marquee>
      <div className="hidden lg:flex lg:items-center lg:justify-around lg:mb-5">
        {litsImage.map((item) => (
          <Link to="/" key={item.src}>
            <img src={item.src} className="w-9 h-9" />
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:col-span-3">
          <LeftColumnHome />
          <div className="col-span-2 ">
            <Link
              to="/"
              className="block mt-3 mb-3 border-b-2 lg:mt-0 border-b-borderD"
            >
              <img src="./domino.jpg" className="w-full" />
              <h3 className="my-3 text-xl font-extrabold hover:text-primaryText">
                Domino 3 thương vụ cùng lúc sắp xảy ra ở Old Trafford
              </h3>
              <p className="text-[15px] mb-4">
                Đội chủ sân Old Trafford sẽ có sự thay đổi cực kỳ quan trọng
                trước kho mùa giải mới khởi tranh
              </p>
            </Link>
            <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3">
              {Array(2)
                .fill(0)
                .map((item, index) => (
                  <>
                    <Link to="/" className="gap-4 mb-3 rounded-sm md:block">
                      <img
                        src="chuyen-nhuong.jpg"
                        className="md:w-full w-[178px] h-[118px]"
                      />
                      <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
                        Chuyển nhượng 08/07: Đẩy đi 4 cái tên, M.U xác định mục
                        tiêu thứ
                      </p>
                    </Link>
                    <Link to="/" className="gap-4 mb-3 rounded-sm md:block">
                      <img
                        src="mbappe2.jpg"
                        className="md:w-full w-[178px] h-[118px]"
                      />
                      <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
                        Với Mbappe và 3 bom tấn, đội hình Arsenal khủng ra sao?
                      </p>
                    </Link>
                    <Link to="/" className="gap-4 mb-3 rounded-sm md:block">
                      <img
                        src="chuyen-gia-indonesia.jpg"
                        className="md:w-full w-[178px] h-[118px]"
                      />
                      <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
                        Với Mbappe và 3 bom tấn, đội hình Arsenal khủng ra sao?
                      </p>
                    </Link>
                  </>
                ))}
            </div>
          </div>
        </div>
        <RightColumnHome />
      </div>
      <ContentHomePage />
    </div>
  );
};

export default HomePage;
