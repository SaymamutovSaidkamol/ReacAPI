import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import ContactUs from "./ContactUs/ContactUs";
import Pricing from "./Pricing/Pricing";
import Work from "./Work/Work";
import Loyout from "./Loyout/Loyout";
import Dashboard from "./Dashboard/Dashboard";
import Product from "./Dashboard/product/Product";
import Profile from "./Dashboard/profile/Profile";
import Statistic from "./Dashboard/statistic/Statistic";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="work" element={<Work />} />
      </Route>

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="product" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="statistic" element={<Statistic />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
