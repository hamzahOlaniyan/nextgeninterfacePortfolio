import React from "react";
import "../../globals.css";

const loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-themeColor">
    <div className="loader"></div>
  </div>
  );
};

export default loading;
