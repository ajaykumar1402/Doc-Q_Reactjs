import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/doctor_imgs/Logo.png"
import { IoIosSearch } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="mt-0 bg-white z-10 flex items-center justify-between gap-10 lg:gap-0 h-[8vh] md:h-[5vh] lg:h-[12vh] px-2 md:px-5 lg:px-10 fixed top-0 left-0 right-0 border border-b-slate-200">
      <Link to={"/"} className="w-[100px]">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer  object-cover w-full"
        />
      </Link>
      <div className="w-full lg:w-1/3 border rounded-md">
        <div className="flex items-center justify-center px-2 py-2 lg:py-0">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full outline-none border-none pr-2 lg:py-2 text-sm"
          />
          <IoIosSearch size={25} className="text-slate-500" />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <div className="text-sm">
          <h2>John</h2>
          <p className="font-semibold">General Doctor</p>
        </div>
        <input
          type="date"
          name="date"
          id="date"
          className="border px-2 py-1 rounded-md outline-none"
        />
        <div className="flex items-center gap-4 text-slate-500">
          <IoMailOutline size={25} className="cursor-pointer" />
          <IoNotificationsOutline size={25} className="cursor-pointer" />
          <IoExitOutline size={25} className="cursor-pointer" />
        </div>
      </div>
      <div className="block lg:hidden relative" ref={menuRef}>
        <TbMenuDeep
          size={25}
          className="cursor-pointer text-[#828282]"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="absolute flex flex-col gap-3 p-2 top-10 right-0 min-w-48 border border-[#828282]/20 bg-white rounded-sm shadow-lg select-none">
            <div className="text-sm">
              <h2 className="font-bold">John</h2>
              <p className="font-semibold text-xs text-[#0001ad]">
                General Doctor
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-500 ">
              <IoMailOutline
                size={20}
                className="cursor-pointer hover:text-[#0001ad] transition-all ease-in-out duration-300"
              />
              <IoNotificationsOutline
                size={20}
                className="cursor-pointer hover:text-[#0001ad] transition-all ease-in-out duration-300"
              />
              <IoExitOutline
                size={20}
                className="cursor-pointer hover:text-[#0001ad] transition-all ease-in-out duration-300"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
