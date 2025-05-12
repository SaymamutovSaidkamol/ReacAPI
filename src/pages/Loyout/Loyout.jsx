import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Loyout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Loyout;
