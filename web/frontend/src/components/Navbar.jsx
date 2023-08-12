import React from "react";
import Logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <div className="pt-4">
      <div className="hidden md:flex md:flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <img src={Logo} className="w-7 mb-3 " alt="logo" />
          <p className="text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet">
            ames
          </p>
        </div>

        <ul className="flex gap-3 text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">Trendy</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
        
        <button className="border border-black p-3 bg-clip-text bg- rounded-lg text-sm">
          Register Now
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
