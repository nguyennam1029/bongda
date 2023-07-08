import React from "react";
import { Link } from "react-router-dom";

const HotProduct = () => {
  return (
    <Link to="/">
      <img src="./arteta-vs-edu.jpeg" className="w-full" />
      <p className="my-2 text-[15px] text-grayf3 truncat line-clamp-2 overflow-ellipsis ">
        3 'chìa khóa' sẽ giúp Arsenal lật đổ sự thống trị của Man City
      </p>
    </Link>
  );
};

export default HotProduct;
