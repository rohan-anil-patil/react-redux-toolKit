import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Pricing from "./Components/Pricing/Pricing";
function Layout() {
  return (
    <div>
      <Navbar />
      <div className="hero w-full mt-20 h-max flex">
        <div className="basis-3/5 h-max">
          <Outlet />
        </div>
        <div className="basis-2/5 sticky top-40 mt-20 max-h-96 min-h-96 bg-slate-200 rounded-lg overflow-y-auto">
          <Pricing />
        </div>
      </div>
    </div>
  );
}

export default Layout;
