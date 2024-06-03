import React from "react";
import { Link } from "react-router-dom";
import { waktuFormat } from "../utils/helper";
import LogoAPk from "../img/LogoApk.png"

const Navbar = () => {
    const waktu = new Date();

  return (
    <div>
      <div className="flex justify-between items-center py-2 px-4">
        <img src={LogoAPk} className="w-[50px]" alt="logo apk" />
        <div className="flex jutify-between gap-9  text-[#F09F0C] font-bold">
          <Link to={"/"}>BaliNews</Link>
          <Link>BaliReport</Link>
          <Link>BaliResponse</Link>
          <Link>HoaxCheck</Link>
          <Link>BaliEmergency</Link>
        </div>
        <div className="flex justify-between  w-[400px] items-center">
          <div className="flex border rounded-md shadow-sm p-1 w-[200px]">
            <p>Cari...</p>
          </div>
          <h1 className="w-[90px] text-[#37B9C2] font-semibold drop-shadow-md ">{waktuFormat(waktu)}</h1>
          <Link
            to={"/login"}
            className="bg-[#624040] text-[#F09F0C] text-md py-1 px-3 rounded-lg"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
