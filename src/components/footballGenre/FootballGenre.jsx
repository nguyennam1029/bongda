import React from "react";
import { Link } from "react-router-dom";
import Heading from "../heading/Heading";

const FootballGenre = ({
  src = "mbappe2.jpg",
  title = "Real và PSG mâu thuẫn, Arsenal có thể nổ bom tấn lớn nhất lịch sử",
  children,
  heading = "TIN CHUYỂN NHƯỢNG",
}) => {
  return (
    <div className="border-t-[3px] border-t-primaryText mt-4">
      <Heading>{heading}</Heading>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
        <div>
          <img src={src} className="w-full" />
          <p className="my-2 text-xl font-medium hover:text-primaryText">
            {title}
          </p>
          <p className="text-[15px] mb-4 text-grayf6">
            Đội chủ sân Old Trafford sẽ có sự thay đổi cực kỳ quan trọng trước
            kho mùa giải mới khởi tranh
          </p>
        </div>
        <div className="overflow-auto md:max-h-[400px] max-h-[200px] scrollbar-thumb-gray-300 scrollbar-track-gray-100 md:gap-5 gap-2">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <>
                <Link
                  className="flex items-center gap-4 mb-2 md:mb-3"
                  key={index}
                >
                  <img src="mbappe2.jpg" className="w-[100px]" />
                  <span className="text-sm text-grayf3">
                    Real và PSG mâu thuẫn, Arsenal có thể nổ bom tấn lớn nhất
                    lịch sử
                  </span>
                </Link>
                <Link className="flex items-center gap-4 mb-2 md:mb-3">
                  <img src="hailinh.jpeg" className="w-[100px]" />
                  <span className="text-sm text-grayf3">
                    Hải Linh: Chiến binh đa năng ở tuyển nữ Việt Nam
                  </span>
                </Link>
                <Link className="flex items-center gap-4 mb-2 md:mb-3">
                  <img src="pochettino.jpg" className="w-[100px]" />
                  <span className="text-sm text-grayf3">
                    Pochettino hé lộ kế hoạch cho mục tiêu của Liverpool
                  </span>
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FootballGenre;
