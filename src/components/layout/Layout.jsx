import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import TopBar from "../header/TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <TopBar></TopBar>
      <div className="bg-[#f2f2f2]">
        <div className="flex items-center justify-center ">
          <div className="lg:w-[1280px] w-full ">
            <div className="bg-[#fff] lg:px-5 lg:py-5 md:px-3 md:py-3 px-2 py-2">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
