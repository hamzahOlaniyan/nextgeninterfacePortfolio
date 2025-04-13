import { LoadingPlaceholder } from "@/components/utils/LoadingPlaceholder";
import React from "react";

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <LoadingPlaceholder />
    </div>
  );
};

export default loading;
