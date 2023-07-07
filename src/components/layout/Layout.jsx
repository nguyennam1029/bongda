import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>

      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
