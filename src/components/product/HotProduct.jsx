import React from "react";
import { Link } from "react-router-dom";

const HotProduct = ({
  url = "chuyen-nhuong.jpg",
  title = "Chuyển nhượng 08/07: Đẩy đi 4 cái tên, M.U xác định mục tiêu thứ 4",
}) => {
  return (
    <>
      <Link to="/" className="rounded-sm">
        <img src={url} className="w-full" />
        <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
          {title}
        </p>
      </Link>
      <Link to="/" className="rounded-sm">
        <img src="./andre-onana2.jpg" className="w-full" />
        <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
          3 chìa khóa sẽ giúp Arsenal lật đổ sự thống trị của Man City
        </p>
      </Link>
    </>
  );
};

export default HotProduct;
