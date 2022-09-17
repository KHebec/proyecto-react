import StateProvider from "../context/StateContext";
import React from "react";
const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <StateProvider>{children}</StateProvider>
    </React.StrictMode>
  );
};

export default Layout;
