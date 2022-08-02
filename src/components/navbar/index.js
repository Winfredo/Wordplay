import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
function Navbar() {
  return (
    <div className="w-screen h-[10vh] bg-gray-800 flex justify-between items-center px-5">
      <div>
        <h2 className="text-primary text-3xl font-bold font-text title shadow-primary">WordPlay</h2>
      </div>
      <div className="text-white font-2xl font-bold flex items-center justify-center gap-6">
        <div className="h-8 w-8 shadow-xl hover:bg-primary bg-primary flex items-center justify-center rounded-full cursor-pointer">
          <BsFillSunFill />
        </div>
        <div className="h-8 w-8 shadow-xl hover:bg-primary bg-primary flex items-center justify-center rounded-full cursor-pointer">
          <HiOutlineLogout />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
