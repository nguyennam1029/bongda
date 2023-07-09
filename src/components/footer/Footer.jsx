import React from "react";
import { Link } from "react-router-dom";
import IconHome from "../icons/IconHome";
import IconMap from "../icons/IconMap";
import IconPhone from "../icons/IconPhone";
import IconFax from "../icons/IconFax";
import IconNoti from "../icons/IconNoti";
import IconEmail from "../icons/IconEmail";

const listContact = [
  {
    icon: <IconMap></IconMap>,
    title: " Địa chỉ:",
    info: "02 Đinh Tiên Hoàng, P.Đa Kao, Q.1, TP.HCM.",
  },
  {
    icon: <IconPhone></IconPhone>,
    title: "Điện thoại:",
    info: " (08) 3910-5017.",
  },
  {
    icon: <IconFax></IconFax>,
    title: "Fax:",
    info: "(08) 3910-5019.",
  },
  {
    icon: <IconNoti></IconNoti>,
    title: "Quảng cáo:",
    info: " 0909 74 64 28.",
  },
  {
    icon: <IconEmail></IconEmail>,
    title: "Liên hệ quảng cáo:",
    info: "quangcao@bongda.com.vn",
  },
  {
    icon: <IconEmail></IconEmail>,
    title: "Email:",
    info: "hotro@bongda.com.vn",
  },
];

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full px-1 bg-grayf3 text-grayf1">
      <div className="lg:w-[1280px] grid grid-cols-1 py-10 lg:grid-cols-2 md:grid-cols-2 lg:gap-9 md:gap-6 gap-8">
        <div>
          <Link to="/">
            <img src="./logo_red.png" className="w-[140px] mb-3 lg:w-[170px]" />
          </Link>
          <p className="text-sm text-[#bbbb]">
            Giấy phép: Số 29/GP-TTĐT của Bộ Thông tin - Truyền thông ngày
            11/02/2010 và GP số 53/GP-STTTT của Sở Thông tin và Truyền thông TP.
            Hồ Chí Minh cấp ngày 4/8/2021. Chịu trách nhiệm nội dung: TS. Võ
            Danh Hải. Bongda.com.vn giữ bản quyền nội dung trên website này. Cấm
            sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.
            Vận hành và phát triển bởi Công ty Cổ phần Yêu Thể Thao.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">LIÊN HỆ:</h3>
          <ul>
            {listContact.map((item) => (
              <li className="flex items-center gap-4 mt-2">
                <span className="text-sm text-[#bbbb]">{item.icon}</span>
                <strong className="text-sm">{item.title}</strong>
                <span className="text-sm text-[#bbbb]">{item.info}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
