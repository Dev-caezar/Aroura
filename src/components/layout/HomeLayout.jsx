import React from "react";
import { Banner, Footer, Header } from "../static";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="w-full h-screen min-h-max bg-black text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
