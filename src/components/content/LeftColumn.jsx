import React from "react";
import HotProduct from "../product/HotProduct";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
const listHot = [
  {
    title: "Rất nhanh chóng, M.U sắp here we go tân binh thứ 2",
  },
  { title: "M.U gây sốc với trụ cột Arsenal" },
  { title: "M.U nhắm cái tên thứ 4, mục tiêu sẵn sàng tới OTF" },
  { title: "Man Utd sẵn sàng hy sinh chữ ký 72 triệu bảng để có Kane" },
  { title: "Sheikh Jassim tìm ra cách thuyết phục nhà Glazer" },
  { title: "CHÍNH THỨC! Man City nhận 'trái đắng' từ Fulham" },
  { title: "Neymar tới bến đỗ gây sốc?" },
  { title: "Man Utd nhanh chóng định đoạt chữ ký Harry Kane" },
  {
    title:
      "Bom tấn 100 triệu bảng công khai muốn gia nhập Chelsea Pochettino ra phán quyết về Lukaku",
  },
  { title: "Sao Arsenal: Tôi rất nóng lòng được xỏ giày ra sân" },
];

const LeftColumn = ({
  url = "./phan-ung-cua.jpg",
  heading = " Phản ứng của tuyển nữ Đức khi thua sốc Zambia",
  des = "Nhiều thành viên tuyển nữ Đức tỏ ra thất vọng sau trận giao hữu thua 2-3 trước Zambia rạng sáng 8/7 (giờ Hà Nội).",
}) => {
  return (
    <div>
      <div className="border-t-[3px] border-t-primaryText lg:order-first ">
        <Heading>TIN NÓNG</Heading>
        <div className="border border-borderD">
          <Link to="/">
            <img src={url} className="w-full" />
          </Link>
          {listHot.map((item) => (
            <Link
              to="/"
              key={item.title}
              className="text-sm hover:text-primaryText block px-[10px] py-4 border-b-2 border-b-borderD even:bg-[#f0f0f0]"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t-[3px] border-t-primaryText lg:order-first order-last">
        <Heading>TIÊU ĐIỂM</Heading>
        <div className="gap-3">
          {Array(2)
            .fill(0)
            .map((item, index) => (
              <>
                <HotProduct
                  url="sasa.jpg"
                  title="Đội hình đầu tiên của Arteta ở Arsenal đang nơi đâu?"
                />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
