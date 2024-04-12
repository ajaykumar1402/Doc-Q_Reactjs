import React,{useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/images/doctor_imgs/Logo.png"



const Navbar = () => {
    const location = useLocation();

    // console.log(location)

    const [isOpen, setIsOpen] = useState(false)

    const navbarLinks = [
        {
            title: "Home",
            path: "/home",
        },
        {
            title: "Our Services",
            path: "/our-services",
        },
        {
            title: "Find Doctor",
            path: "/find-doctor",
        },
        {
            title: "Login/Register",
            path: "/login/register",
        },
    ];

    return (
        <nav className="w-full h-[12svh] sticky top-0 z-50 flex justify-center items-center bg-white">
            <div className="w-11/12 flex justify-between items-center relative">
                <div className="w-[100px]">
                    <img src={Logo} alt="" className="object-cover w-full" />
                </div>
                <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-10">
                    {navbarLinks.map((link, i) => (
                        <Link
                            to={link.path}
                            key={i}
                            className={`text-lg font-bold cursor-pointer ${location.pathname === link.path
                                    ? "text-blue-500"
                                    : "text-[#888787] line-through"
                                }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className={` p-4 flex flex-col justify-center items-center gap-5 absolute top-14 right-[-1rem]  w-[110%] bg-gray-100 backdrop-filter backdrop-blur-sm bg-opacity-70 md:right-[-2.5rem] lg:hidden ${isOpen ? 'block' : 'hidden' }`}>
                    {navbarLinks.map((link, i) => (
                        <Link
                            to={link.path}
                            key={i}
                            className={`text-lg font-bold  ${location.pathname === link.path
                                    ? "text-blue-500"
                                    : "text-[#888787] line-through"
                                }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="ml-8 md:ml-28 w-[100%] lg:w-[25%]">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="border-[1px] border-[#888787] py-1 px-2  rounded-full w-[80%]  lg:px-4 lg:py-2  lg:w-full "
                    />
                </div>
                <div className="lg:hidden cursor-pointer " onClick={()=>setIsOpen(!isOpen)}>
                    <GiHamburgerMenu/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
