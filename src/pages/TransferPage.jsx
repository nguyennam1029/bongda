import React from "react";
import LeftColumn from "../components/content/LeftColumn";
import ContentPage from "../components/content/ContentPage";
import RightColumn from "../components/content/RightColumn";

const TransferPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <h1 className="bg-[#eee] text-2xl font-bold px-2 py-[10px] grid lg:grid-cols-3 lg:col-span-3">
          TIN CHUYỂN NHƯỢNG
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:col-span-3">
          <LeftColumn />

          <ContentPage
            urlT="andre-onana.jpg"
            headingT="Chiếc áo số 1 đang đợi cậu ấy ở Old Trafford"
            desT="Manchester United đã sẵn sàng đón thủ môn của Inter Milan, Andre Onana, phóng viên Dean Jones nói với GIVEMESPORT."
            urlB="doi-hinh-man-utd.jpg"
            headingB="Đội hình Man Utd mùa mới với 3 tân binh"
            desB="Man Utd đã ký hợp đồng với Mason Mount, đồng thời xác định hai vụ chuyển nhượng ưu tiên khác."
          />
        </div>
        <RightColumn
          url="andre-onana-2.jpg"
          title="CHÍNH THỨC! David de Gea chia tay Man Utd"
        />
      </div>
    </>
  );
};

export default TransferPage;
