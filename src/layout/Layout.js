import ShoppingProvider from "../context/ShoppingContext";
import React from "react";
const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <ShoppingProvider>{children}</ShoppingProvider>
    </React.StrictMode>
  );
};

export default Layout;
