import Ring from "@/icons/Ring";
import React from "react";

const TopBorder = () => {
  return (
    <div className="flex items-center gap-4 mx-auto max-w-[300px]">
      <div className="line"></div>
      <Ring className="w-10" />
      <div className="line"></div>
    </div>
  );
};

export default TopBorder;
