import React from "react";
import { IoIosConstruct } from "react-icons/io";
import { GiCargoCrane } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";

const InfoUnderHeader = () => {
  return (
    <div className="underHeader">
      <a href="#fields" className="introInfo introInfoBlack">
        <AiFillSetting />
        مجالاتنا
      </a>
      <a href="#gallery" className="introInfo introInfoGold">
        <IoIosConstruct />
        منتجاتنا
      </a>
      <a href="#contact" className="introInfo introInfoGray">
        <GiCargoCrane />
        تواصل معنا
      </a>
    </div>
  );
};
export default InfoUnderHeader;
