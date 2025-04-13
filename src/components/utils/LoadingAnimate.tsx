import React from "react";

const LoadingAnimate = () => {
  return (
    <div className="flex gap-2 relative">
      <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce"></span>
      <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce delay-150"></span>
      <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce delay-300"></span>
    </div>
  );
};

export default LoadingAnimate;
