import React from "react";
import navImg from "../../assets/banner-main.png";
import dollarImg from "../../assets/Currency.png";

// Navbar component → Logo + Balance দেখাবে
const Navbar = ({ availableBalance }) => {
  return (
    <div>
      <div className="flex justify-between">
        {/* Logo */}
        <img className="w-[76px]" src={navImg} alt="Logo" />
        
        {/* Balance Section */}
        <div className="flex items-center">
          <span className="mr-1">{availableBalance}</span>
          <span className="mr-1">Coin</span>
          <img src={dollarImg} alt="Coin Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
