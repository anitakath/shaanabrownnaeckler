

/*
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

*/

import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../COMPONENTS/Header";
import Footer from "../COMPONENTS/Footer";

function Root() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <main>
        <Outlet />
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
