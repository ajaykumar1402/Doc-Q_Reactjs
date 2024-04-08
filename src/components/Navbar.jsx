import { useState } from "react";
import "./navbar.css";
import CompanyLogo from "../assets/Logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [allicons, setAllIcons] = useState(false);
  const HandleIcons = () => {
    setAllIcons(!allicons);
    console.log(allicons);
  };

  return (
    <div>
      <div className="navMainContainer">
        <div className="logo">
          <img src={CompanyLogo} width="100px" height="40px" />
        </div>
        <div className="menuConatiner">
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive
                ? "#5b81ae" //blue
                : "#888787", //gray
            })}>
            Home
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => ({
              color: isActive
                ? "#5b81ae" //blue
                : "#888787", //gray
            })}>
            Our Services
          </NavLink>
          <NavLink
            to="/findDoctors"
            style={({ isActive }) => ({
              color: isActive
                ? "#5b81ae" //blue
                : "#888787", //gray
            })}>
            Find Doctors
          </NavLink>
          <NavLink
            to="/loginRegister"
            style={({ isActive }) => ({
              color: isActive
                ? "#5b81ae" //blue
                : "#888787", //gray
            })}>
            Login/Register
          </NavLink>
        </div>
        <div className="searchbar">
          <input placeholder="Search..." />
        </div>

        <div className="hamburgerIcon">
          <GiHamburgerMenu onClick={HandleIcons} />
        </div>
      </div>

      <div className="menuDiv">
        {
          // allicons?<div className='sidebardiv'>
          //  {/* add menu */}
          // </div>:""

          allicons ? (
            <div className="sidebardiv">
              {/* add menu */}
              <div className="list_items_menu">
                <NavLink
                  to="/home"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}>
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}>
                  Our Services
                </NavLink>
                <NavLink
                  to="/findDoctors"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}>
                  Find Doctors
                </NavLink>
                <NavLink
                  to="/loginRegister"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}>
                  Login/Register
                </NavLink>
              </div>
            </div>
          ) : (
            ""
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
