import React, { useEffect, useRef } from "react";
import HotProduct from "../product/HotProduct";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";

const RightColumnHome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.muted = true;
    videoElement.play();
  }, []);
  return (
    <div>
      <div className="overflow-hidden border rounded-md border-borderD">
        <div className="text-[#222222] font-bold  flex items-center gap-2  px-4 py-2">
          <img src="./Barcelona.png" className="w-7 h-7" />
          <span className="">
            Martinelli, Jesus and Saliba among stars to return for
          </span>
        </div>
        <video ref={videoRef} src="video.mp4" autoPlay controls>
          {/* <video src="video.mp4"> */}
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
            {Array(2)
              .fill(0)
              .map((item, index) => (
                <HotProduct key={index} url="andre-onana9.jpg"></HotProduct>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumnHome;
