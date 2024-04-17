import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const sidebarMenu = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <LuLayoutDashboard size={20} />,
  },
  {
    title: "Schedule",
    link: "/schedule",
    icon: <MdOutlineCalendarToday size={20} />,
  },
  {
    title: "Tasks",
    link: "/tasks",
    icon: <BiTask size={20} />,
  },
  {
    title: "Patients",
    link: "/patients",
    icon: <FiUsers size={20} />,
  },
  {
    title: "Messages",
    link: "/messages",
    icon: <IoMailOutline size={20} />,
  },
  {
    title: "Analytics",
    link: "/analytics",
    icon: <IoStatsChartOutline size={20} />,
  },
];

const sidebarGeneral = [
  {
    title: "Settings",
    link: "/settings",
    icon: <IoSettingsOutline size={20} />,
  },
  {
    title: "Support",
    link: "/support",
    icon: <MdOutlineContactSupport size={20} />,
  },
];

function Sidebar() {
  const location = useLocation();

  const isActiveNavItem = (path) => {
    console.log("Path: ", path);
    console.log("Location Path: ", location.pathname);
    return location.pathname.startsWith(path);
  };

  return (
    <div className="mt-[8vh] md:mt-[5vh] lg:mt-[12vh] min-w-[20%] md:min-w-[10%] lg:min-w-[15%] min-h-[92vh] md:min-h-[95vh] lg:min-h-[88vh] p-4 shadow-md select-none fixed left-0 bg-white">
      <p className="font-medium text-xs lg:text-sm text-center lg:text-left text-[#838383]">
        Menu
      </p>
      <div className="mt-2 font-normal">
        {sidebarMenu &&
          sidebarMenu.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              className={`flex items-center justify-center lg:justify-normal gap-4 py-2 cursor-pointer  transition-all ease-in-out duration-300 ${
                isActiveNavItem(item.link)
                  ? "text-[#0001ad]"
                  : "text-[#838383] hover:text-[#0001ad]"
              }`}
            >
              <p>{item.icon}</p>
              <p className="hidden lg:block font-medium text-sm">
                {item.title}
              </p>
            </Link>
          ))}
      </div>
      <hr className="mt-5" />
      <p className="font-medium text-xs lg:text-sm mt-4 text-center lg:text-left text-[#838383]">
        General
      </p>
      <div className="mt-2 font-normal">
        {sidebarGeneral &&
          sidebarGeneral.map((item, index) => (
            <Link
              to={item.link}
              key={item.name}
              className={`flex items-center justify-center lg:justify-normal gap-4 py-2 cursor-pointer  transition-all ease-in-out duration-300 ${
                isActiveNavItem(item.link)
                  ? "text-[#0001ad]"
                  : "text-[#838383] hover:text-[#0001ad]"
              }`}
            >
              <p title={item.title}>{item.icon}</p>
              <p className="hidden lg:block font-medium text-sm">
                {item.title}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;