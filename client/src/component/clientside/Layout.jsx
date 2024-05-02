import React from "react";
import NavigationCard from "./NavigationCard";
import Nav from "../clientside/Nav"
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="mt-28 flex max-w-4xl mx-auto gap-6">
        <div className="w-3/12">
          <NavigationCard />
        </div>
        <div className="w-9/12">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
