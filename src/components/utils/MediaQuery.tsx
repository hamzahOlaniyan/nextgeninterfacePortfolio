import React from "react";

const MediaQuery = ({ children }: { children: React.ReactNode }) => {
  return <section className="px-4 sm:px-14 md:px-16 lg:px-20">{children}</section>;
};

export default MediaQuery;
