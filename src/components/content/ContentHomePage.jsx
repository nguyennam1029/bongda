import React from "react";
import FootballGenre from "../footballGenre/FootballGenre";
import FootballGrid from "../footballGenre/FootballGrid";
import { Link } from "react-router-dom";
import Heading from "../heading/Heading";

const ContentHomePage = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="grid grid-cols-4 col-span-4 lg:grid-cols-3 lg:col-span-3">
        <div className="grid-cols-4 col-span-4 lg:grid-cols-3 lg:col-span-3">
          <div className="border-t-[3px] border-t-primaryText mt-4">
            <Heading>TIN MỚI NHẤT</Heading>
            <div className="grid gap-3 lg:gap-5 lg:grid-cols-2 md:grid-cols-1">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <>
                    <Link className="flex items-center gap-4" key={index}>
                      <img src="mbappe.jpg" className="w-[100px]" />
                      <span className="text-sm text-grayf3">
                        Real và PSG mâu thuẫn, Arsenal có thể nổ bom tấn lớn
                        nhất lịch sử
                      </span>
                    </Link>
                    <Link className="flex items-center gap-4">
                      <img src="hailinh.jpeg" className="w-[100px]" />
                      <span className="text-sm text-grayf3">
                        Hải Linh: Chiến binh đa năng ở tuyển nữ Việt Nam
                      </span>
                    </Link>
                    <Link className="flex items-center gap-4">
                      <img src="pochettino.jpg" className="w-[100px]" />
                      <span className="text-sm text-grayf3">
                        Pochettino hé lộ kế hoạch cho mục tiêu của Liverpool
                      </span>
                    </Link>
                  </>
                ))}
            </div>
          </div>
          <FootballGenre></FootballGenre>
          <FootballGenre
            heading="BÓNG ĐÁ ANH"
            title="Đội hình đầu tiên của Arteta ở Arsenal đang nơi đâu?"
            src="./sasa.jpg"
          ></FootballGenre>
          <FootballGenre
            heading="BÓNG ĐÁ VIỆT NAM"
            title="Hải Linh: Chiến binh đa năng ở tuyển nữ Việt Nam"
            src="./hai-linh.jpeg"
          ></FootballGenre>
          <div className="border-t-[3px] border-t-primaryText mt-4">
            <Heading>PHOTO</Heading>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
              <div className="relative">
                <img src="thuong-vu.png" className="w-full" />
                <p className="absolute bottom-0 left-0 right-0 px-1 py-2 text-lg font-medium bg-grayf3 text-grayf1">
                  11 thương vụ lớn nhất hè này: Tân binh Man Utd; Bom tấn 103
                  triệu euro
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Array(4)
                  .fill(0)
                  .map((item, index) => (
                    <>
                      <Link to="/" className="relative block ">
                        <img src="bikini.png" />
                        <p className="absolute bottom-0 left-0 right-0 px-1 py-2 text-sm text-grayf1">
                          Bạn gái Grealish hớp hồn đấng mày râu
                        </p>
                      </Link>
                    </>
                  ))}
              </div>
            </div>
          </div>
          <FootballGenre
            heading="HẬU TRƯỜNG"
            title="E thẹn diện bikini, bạn gái Grealish gây thương nhớ"
            src="./bikini.png"
          ></FootballGenre>
          <FootballGenre
            heading="BÓNG ĐÁ TÂY BAN NHA"
            title="Ronaldo chỉ ra thực trạng của bóng đá Brazil"
            src="./ronaldo.jpg"
          ></FootballGenre>
          <FootballGenre
            heading="CHAMPIONS LEAGUE"
            title="Ronaldo giúp Al-Nassr ký hợp đồng với gã khổng lồ"
            src="./ronaldo-giup-al-nass.jpg"
          ></FootballGenre>

          {/* BÓNG ĐÁ Ý BÓNG ĐÁ ĐỨC */}

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <FootballGrid></FootballGrid>
            <FootballGrid
              url="reus-dua.jpg"
              heading="BÓNG ĐÁ ĐỨC"
              title="Reus đưa ra thông báo sốc trong kỳ nghỉ hè sắp tới này"
            ></FootballGrid>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <FootballGrid
              heading="EUROPA LEAGUE"
              title="Sự chuyên nghiệp được thầy Park mang lại cho bóng đá Việt Nam"
            ></FootballGrid>

            <FootballGrid
              url="psg-do-loi-cho.jpg"
              heading="BÓNG ĐÁ PHÁP"
              title="PSG đổ lỗi cho Benzema khi sắp mất trắng Mbappe"
            ></FootballGrid>
          </div>

          <FootballGenre
            heading="GÓC BẠN ĐỌC"
            title="Thử thách lớn chờ “tiểu Messi”"
            src="./thu-thach-lon-cho-tieu-mess.jpg"
          ></FootballGenre>
          <FootballGenre
            heading="AFF CUP"
            title="Chuyên gia Indonesia: 'HLV Shin Tae-yong chưa có thành tích gì'"
            src="./chuyen-gia-indonesia.jpg"
          ></FootballGenre>
        </div>
      </div>
    </div>
  );
};

export default ContentHomePage;
