import React from "react";
import LeftColumn from "../components/content/LeftColumn";
import ContentPage from "../components/content/ContentPage";
import RightColumn from "../components/content/RightColumn";
import HeadingPage from "./HeadingPage";

const TbnPage = () => {
  return (
    <>
      <HeadingPage />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 lg:col-span-3">
          <LeftColumn />

          <ContentPage
            urlT="rudiger-0534.jpeg"
            headingT="7 cầu thủ từ chối Barcelona để đầu quân cho Real Madrid"
            desT="Arda Guler vừa từ chối cơ hội gia nhập Barcelona và ký hợp đồng với Real Madrid. Anh là 1 trong 7 cầu thủ đã có quyết định này."
            urlB="xavi-duoc.jpg"
            headingB="Xavi được cưng chiều ở Barca"
            desB="Barcelona không tiếc tiền đem về những cầu thủ mà HLV người Tây Ban Nha yêu cầu trong hai năm qua"
          />
        </div>
        <RightColumn
          url="mbappe-psg.jpg"
          title="Mbappe: PSG chỉ toàn sự chia rẽ"
        />
      </div>
    </>
  );
};

export default TbnPage;
