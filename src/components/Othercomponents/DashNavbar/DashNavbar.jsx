import { Link, useNavigate } from "react-router-dom";

import searchIcon from "../../pages/Dashboard/Messages/icons/search.png";
import ci_mail from "../../pages/Dashboard/Messages/icons/ci_mail.svg";
import mi_notification from "../../pages/Dashboard/Messages/icons/mi_notification.svg";
import logout from "../../pages/Dashboard/Messages/icons/ic_baseline-log-out.svg";
import "./DashNavbar.scss";
import CustomInput from "components/Input/CustomInput";

const DashNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-[#ffffff] fixed z-10 w-[100%] py-[0] px-[123px] shadow-md hover:shadow-lg">
      <div className="general-nav ml-[20%] flex flex-row h-[97px] w-[95%] items-center justify-center gap-4">
        <div className="dash-nav w-[50%] pr-10">
          <CustomInput title={""} width={""} height={""}>
            <img src={searchIcon} alt="searchIcon" />
          </CustomInput>
        </div>
        <div className="doctor-position flex flex-col nowrap w-[20%]">
          <p className="doctor-info">John Doe</p>
          <p className="doctor-info name font-bold">General Doctor</p>
        </div>

        <div className="nav-date-info border w-[200px] h-[30px] m-auto flex items-center justify-center">
          <p className="nav-date-info">24, October 2022</p>
        </div>

        <div className="nav-icons flex gap-10 w-[20%]">
          <img src={ci_mail} alt="mail" />
          <img src={mi_notification} alt="notifications" />
          <img src={logout} alt="logout" />
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
