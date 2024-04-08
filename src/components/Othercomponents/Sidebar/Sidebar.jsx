import { Fragment, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import "./Sidebar.scss";
import SubSidebarItems from "./SubSidebarItems";
import Line from "../../pages/Dashboard/Messages/icons/line.svg";

const Sidebar = ({ menuIcon }) => {
  const [activeParent, setActiveParent] = useState("");

  const location = useLocation();

  return (
    <>
      <div className="sidebar-wrapper">
        <div className={`${menuIcon && `mobile`} sidebar`}>
        <div className="ml-5 text-sm auto-hide">
            MENU
          </div>
          <ul className="sidebar-menu">
            {SidebarItems.map((item, i) => {
              const Logo = item.icon;
              return (
                <Fragment key={i}>
                  <NavLink
                    onClick={(e) => {
                      if (item.path === activeParent) {
                        setActiveParent("");
                      } else {
                        setActiveParent(item.path);
                      }
                    }}
                    to={item.path}
                  >
                    <div className="first">
                      <Logo className="icon-logo" />
                      <div className="sidebaricon-title">{item.title}</div>
                    </div>
                  </NavLink>
                  <div className="sidebar-children">
                    <ul className="sidebar-children-item"></ul>
                  </div>
                </Fragment>
              );
            })}
          </ul>
          <div className="flex items-center justify-center pb-10">
            <img src={Line} alt="line" />
          </div>
          <div className="ml-5 text-sm auto-hide">
            GENERAL
          </div>
          <ul className="sidebar-menu">
            {SubSidebarItems.map((item, i) => {
              const Logo = item.icon;
              return (
                <Fragment key={i}>
                  <NavLink
                    onClick={(e) => {
                      if (item.path === activeParent) {
                        setActiveParent("");
                      } else {
                        setActiveParent(item.path);
                      }
                    }}
                    to={item.path}
                  >
                    <div className="first">
                      <Logo className="icon-logo" />
                      <div className="sidebaricon-title">{item.title}</div>
                    </div>
                  </NavLink>
                  <div className="sidebar-children">
                    <ul className="sidebar-children-item"></ul>
                  </div>
                </Fragment>
              );
            })}
          </ul>
          <div className="flex items-center justify-center">
            <img src={Line} alt="line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
