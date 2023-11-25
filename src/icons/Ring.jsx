import React from "react";
import ring from "../images/ring.png";
import Image from "next/image";

const Ring = ({ className }) => {
  return <Image className={className} src={ring} alt="" />;
};

export default Ring;
