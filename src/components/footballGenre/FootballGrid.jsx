import React from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";

const FootballGrid = ({
  heading = "BÓNG ĐÁ Ý",
  url = "osimhen.jpeg",
  title = " Loạt ông lớn theo đuổi Osimhen, Cannavaro khuyên Napoli 1 điều",
}) => {
  return (
    <div className="border-t-[3px] border-t-primaryText mt-4">
      <Heading>{heading}</Heading>
      <Link to="/">
        <img src={url} className="w-full" />
        <p className="my-4 text-xl font-medium hover:text-primaryText">
          {title}
        </p>
      </Link>
      <div>
        {Array(2)
          .fill(0)
          .map((item, index) => (
            <>
              <Link
                to="/"
                className="flex items-center hover:text-primaryText gap-2 text-sm py-4 text-[#222] border-t-2 border-borderD"
              >
                <p className="w-[6px] h-[6px] bg-gray80"></p>Vì sao Pogba rớt
                giá thê thảm?
              </Link>
              <Link
                to="/"
                className="flex items-center hover:text-primaryText gap-2 text-sm py-4 text-[#222] border-t-2 border-borderD"
              >
                <p className="w-[6px] h-[6px] bg-gray80"></p>Vì sao Trọng tài
                xúc phạm Mourinho bị gạch tên
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default FootballGrid;
