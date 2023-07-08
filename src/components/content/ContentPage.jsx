import React from "react";
import Pagination from "../pagination/Pagination";
import { Link } from "react-router-dom";

const ContentPage = ({
  urlT = "./phan-ung-cua.jpg",
  headingT = " Phản ứng của tuyển nữ Đức khi thua sốc Zambia",
  desT = "Nhiều thành viên tuyển nữ Đức tỏ ra thất vọng sau trận giao hữu thua 2-3 trước Zambia rạng sáng 8/7 (giờ Hà Nội).",
  urlB = "guler2.jpg",
  headingB = " Here we go! Burnley đón tân binh thứ 4, từ Dortmund",
  desB = "Trao đổi trên kênh youtube cá nhân, ký giả Fabrizio Romano đã có những chia sẻ đáng chú ý xoay quanh tài năng người Thổ Nhĩ Kỳ.",
}) => {
  return (
    <>
      <div className="col-span-2 ">
        <Link
          to="/"
          className="relative block mt-3 mb-3 border-b-2 lg:mt-0 border-b-borderD"
        >
          <img src={urlT} className="w-full" />
          <div className="absolute bottom-0 left-5 right-5 text-grayf1">
            <h3 className="my-2 text-xl font-extrabold hover:text-primaryText">
              {headingT}
            </h3>
            <span>15:48 08/07 </span>
            <p className="text-[15px] mb-4">{desT}</p>
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-2 md:gap-4">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <>
                <Link className="flex items-center gap-4">
                  <img src={urlB} className="w-[240px]" />
                  <div>
                    <p className="text-lg font-bold">{headingB}</p>
                    <span className="text-sm text-grayf3">{desB}</span>
                  </div>
                </Link>
                <Link className="flex items-center gap-4">
                  <img src="./phan-ung-cua.jpg" className="w-[240px]" />
                  <div>
                    <p className="text-lg font-bold">
                      Phản ứng của tuyển nữ Đức khi thua sốc Zambia
                    </p>
                    <span className="text-sm text-grayf3">
                      Nhiều thành viên tuyển nữ Đức tỏ ra thất vọng sau trận
                      giao hữu thua 2-3 trước Zambia rạng sáng 8/7 (giờ Hà Nội).
                    </span>
                  </div>
                </Link>
              </>
            ))}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default ContentPage;
