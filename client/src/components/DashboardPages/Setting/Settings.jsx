import { CiCircleQuestion } from "react-icons/ci";
import { FaPlus, FaHospitalAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RiBankFill } from "react-icons/ri";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { LiaKeySolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const settingItems = [
  {
    name: "My Practice",
    desc: "Practice profile and details",
    icon: <FaPlus size={25} />,
    link: "#",
  },
  {
    name: "Hospital/Clinic",
    desc: "Hospital/Clinic details",
    icon: <FaHospitalAlt size={25} />,
    link: "#",
  },
  {
    name: "Location and Rooms",
    desc: "Manage rooms",
    icon: <MdOutlineEditLocationAlt size={25} />,
    link: "#",
  },
  {
    name: "Payment",
    desc: "Account and payment details",
    icon: <FaRegCreditCard size={25} />,
    link: "#",
  },
  {
    name: "Users",
    desc: "Management and registration for users",
    icon: <HiOutlineUsers size={25} />,
    link: "#",
  },
  {
    name: "Access permissions",
    desc: "Access rights configuration",
    icon: <LiaKeySolid size={25} />,
    link: "#",
  },
];

const Setting = () => {
  return (
    <div className="w-full mt-[8vh] md:mt-[5vh] lg:mt-[12vh] bg-[#f9f8f8] h-full lg:h-[88vh] max-w-[80%] md:max-w-[90%] lg:max-w-[85%] p-2 lg:p-5 lg:overflow-hidden">
      <h2 className="font-semibold mb-5">Settings</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        <div>
          <div className="flex items-center justify-between px-5 py-2 bg-white rounded-md mb-5">
            <h2 className="font-semibold">Settings</h2>
            <Link
              to={"/help"}
              className="border p-1 rounded-md hover:border-slate-500 transition-all duration-300 ease-in-out"
            >
              <CiCircleQuestion size={25} />
            </Link>
          </div>
          <div className="lg:overflow-y-scroll lg:h-[60vh]">
            {settingItems &&
              settingItems.map((item) => (
                <Link
                  to={item.link}
                  key={item.name}
                  className="flex items-center justify-between bg-white my-2 px-5 py-2 rounded-md"
                >
                  <div className="flex items-center gap-4">
                    <p className="text-[#838383]">{item.icon}</p>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-xs lg:text-sm text-[#838383]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <IoIosArrowForward size={25} className="text-[#838383]" />
                </Link>
              ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between px-5 py-2 bg-white rounded-md mb-5">
            <h2 className="font-semibold">Payment Settings</h2>
            <div className="flex items-center gap-2">
              <Link
                to={"/add-payment"}
                className="border p-1 rounded-md hover:border-slate-500 transition-all duration-300 ease-in-out"
              >
                <IoAddOutline size={25} />
              </Link>
              <Link
                to={"/help"}
                className="border p-1 rounded-md hover:border-slate-500 transition-all duration-300 ease-in-out"
              >
                <CiCircleQuestion size={25} />
              </Link>
            </div>
          </div>
          <div className="w-full p-5 bg-white rounded-md flex flex-col items-center justify-center gap-2">
            <RiBankFill className="text-9xl text-[#838383]" />
            <h2 className="font-bold text-base lg:text-lg">
              No Payment Details Found
            </h2>
            <p className="text-zinc-800 text-xs lg:text-sm px-10 text-center">
              Set up your bank account for patients to pay their services
            </p>
            <Link to={"/add-payment"} className="mt-5">
              <button className="bg-[#2929e0] text-sm text-white font-semibold px-5 py-2 rounded-md hover:bg-[#2929cf]">
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
