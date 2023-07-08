import React from "react";

import ContentPage from "../components/content/ContentPage";
import LeftColumn from "../components/content/LeftColumn";
import RightColumn from "../components/content/RightColumn";

const NewsPage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:col-span-3">
        <LeftColumn />
        <ContentPage />
      </div>
      <RightColumn
        url="david.jpg"
        title="CHÍNH THỨC! David de Gea chia tay Man Utd"
      />
    </div>
  );
};

export default NewsPage;
