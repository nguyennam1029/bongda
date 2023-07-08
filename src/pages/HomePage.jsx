import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/heading/Heading";
import HotProduct from "../components/product/HotProduct";
import FootballGenre from "../components/footballGenre/FootballGenre";
import FootballGrid from "../components/footballGenre/FootballGrid";

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
const HomePage = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;
  //   videoElement.play();
  // }, []);
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
          <div className="border-t-[3px] border-t-primaryText lg:order-first order-last">
            <Heading>TIN NÓNG</Heading>
            <div className="border border-borderD">
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
              {Array(6)
                .fill(0)
                .map((item, index) => (
                  <HotProduct key={index}></HotProduct>
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-hidden border rounded-md border-borderD">
            <div className="text-[#222222] font-bold  flex items-center gap-2  px-4 py-2">
              <img src="./Barcelona.png" className="w-7 h-7" />
              <span className="">
                Martinelli, Jesus and Saliba among stars to return for
              </span>
            </div>
            {/* <video ref={videoRef} src="video.mp4" autoPlay controls> */}
            <video src="video.mp4">
              Your browser does not support the video tag.
            </video>
            <div className="text-[#222222] text-sm  flex items-center justify-between  px-4 py-3">
              <img src="./Barcelona.png" className="w-7 h-7" />
              <span className="">Xem các video tương tự</span>
            </div>
          </div>
          <div>
            <div className="border-t-[3px] border-t-primaryText mt-4 hidden lg:block">
              <Heading>TIN ĐỌC NHIỀU NHẤT</Heading>
              <div className="">
                <Link
                  to="/"
                  className="block mt-3 mb-3 border-b-2 lg:mt-0 border-b-borderD"
                >
                  <img src="./imageHot.jpg" className="w-full" />
                  <p className="my-3 text-base font-bold hover:text-primaryText">
                    Rất nhanh chóng, M.U sắp 'here we go' tân binh thứ 2
                  </p>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-2 md:gap-3 md:grid-cols-2">
                {Array(4)
                  .fill(0)
                  .map((item, index) => (
                    <HotProduct key={index}></HotProduct>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default HomePage;
