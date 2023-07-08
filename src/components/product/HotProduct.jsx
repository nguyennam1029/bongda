import React from "react";
import { Link } from "react-router-dom";

const HotProduct = ({
  url = "chuyen-nhuong.jpg",
  title = "Chuyển nhượng 08/07: Đẩy đi 4 cái tên, M.U xác định mục tiêu thứ 4",
}) => {
  return (
    <>
      <Link
        to="/"
        className="flex items-center justify-center gap-4 mb-3 rounded-sm md:block"
      >
        <img src={url} className="md:w-full w-[120px]" />
        <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
          {title}
        </p>
      </Link>
      <Link
        to="/"
        className="flex items-center justify-center gap-4 mb-3 rounded-sm md:block"
      >
        <img src="./andre-onana2.jpg" className="md:w-full w-[120px]" />
        <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
          3 chìa khóa sẽ giúp Arsenal lật đổ sự thống trị của Man City
        </p>
      </Link>
    </>
  );
};

export default HotProduct;
