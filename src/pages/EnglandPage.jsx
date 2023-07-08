import React from "react";
import LeftColumn from "../components/content/LeftColumn";
import ContentPage from "../components/content/ContentPage";
import RightColumn from "../components/content/RightColumn";

const EnglandPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <h1 className="bg-[#eee] text-2xl font-bold px-2 py-[10px] grid lg:grid-cols-3 lg:col-span-3">
          BÓNG ĐÁ ANH
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:col-span-3">
          <LeftColumn />

          <ContentPage
            urlT="mount-james.jpg"
            headingT="Jason Cundy: Sự lựa chọn hiển nhiên cho băng đội trưởng Chelsea"
            desT="Huyền thoại của Chelsea, Jason Cundy đã thúc Mauricio Pochettino để hậu vệ Reece James trở thành đội trưởng mới của câu lạc bộ sau sự ra đi của Cesar Azpilicueta."
            urlB="hojlund.jpg"
            headingB="Hojlund là canh bạc đáng thử với Man Utd"
            desB="Người hâm mộ xem Rasmus Hojlund như phiên bản nâng cấp của Wout Weghorst. Nếu sự thật là vậy, Man Utd cần sớm đưa trung phong người Đan Mạch về Old Trafford."
          />
        </div>
        <RightColumn
          url="david.jpg"
          title="CHÍNH THỨC! David de Gea chia tay Man Utd"
        />
      </div>
    </>
  );
};

export default EnglandPage;
