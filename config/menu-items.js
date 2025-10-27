import { FaTasks } from "react-icons/fa";
import { FiPieChart, FiSettings, FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
const menuItems = [
  {
    text: "Dashboard",
    icon: <FiPieChart />,
    path: "/dashboard",
  },
  {
    text: "Account Managers",
    icon: <RiAccountCircleLine />,
    path: "/account-managers",
  },
  {
    text: "Tasks",
    icon: <FaTasks />,
    path: "/tasks",
  },
  {
    text: "Sales Team",
    icon: <IoBagHandleOutline />,
    path: "/sales-team",
  },
  {
    text: "Vendors",
    icon: <RiAccountCircleLine />,
    path: "/vendors",
  },
  {
    text: "Clients",
    icon: <FiUser />,
    path: "/clients",
  },
  {
    text: "Settings",
    icon: <FiSettings />,
    path: "/settings",
  },
];
export default menuItems;
