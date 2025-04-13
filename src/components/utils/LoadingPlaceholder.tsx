import React from "react";
import "../../app/globals.css";

export const LoadingPlaceholder = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-themeColor">
      <div className="loader"></div>
    </div>
  );
};
