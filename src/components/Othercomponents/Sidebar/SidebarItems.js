
import { ReactComponent as  dashboard} from "../../pages/Dashboard/Messages/icons/dashboard.svg";
import { ReactComponent as  schedule} from "../../pages/Dashboard/Messages/icons/uil_calender.svg"
import { ReactComponent as  tasks} from "../../pages/Dashboard/Messages/icons/bx_task.svg";
import { ReactComponent as  patients} from "../../pages/Dashboard/Messages/icons/bi_people.svg"
import { ReactComponent as  messages} from "../../pages/Dashboard/Messages/icons/ant-design_mail-outlined.svg"
import { ReactComponent as  analytics} from "../../pages/Dashboard/Messages/icons/analytics.svg";

const SidebarItems = [
  {
    title: "Dashboard",
    path: "/dashboard/home",
    icon: dashboard,
  },
  {
    title: "Schedule",
    path: "/dashboard/schedule",
    icon: schedule,
  },

  {
    title: "Tasks",
    path: "/dashboard/task",
    icon: tasks,
  },

  {
    title: "Patients",
    path: "/dashboard/patients",
    icon: patients,
  },

  {
    title: "Messages",
    path: "/dashboard/messages",
    icon: messages,
  },

  {
    title: "Analytics",
    path: "",
    icon: analytics,
  },
];
export default SidebarItems;
