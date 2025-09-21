import React from "react";
import navImg from "../../assets/banner-main.png";
import dollarImg from "../../assets/Currency.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <img className="w-[76px]" src={navImg} alt="" />
        </div>
        <div className="flex items-center">
          <span className="mr-1">6000000000</span>
          <span className="mr-1"> Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
