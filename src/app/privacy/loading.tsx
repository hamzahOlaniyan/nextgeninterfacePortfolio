import { LoadingPlaceholder } from "@/components/utils/LoadingPlaceholder";
import React from "react";

const loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-themeColor">
    <div className="loader"></div>
  </div>
  );
};

export default loading;
