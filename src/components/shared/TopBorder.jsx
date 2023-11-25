import Ring from "@/icons/Ring";
import classNames from "classnames";
import React from "react";

const TopBorder = ({ light }) => {
  return (
    <div className="flex items-center gap-4 mx-auto max-w-[300px]">
      <div className={classNames(light && "light", "line")}></div>
      <Ring className="w-10" light={light} />
      <div className={classNames(light && "light", "line")}></div>
    </div>
  );
};

export default TopBorder;
