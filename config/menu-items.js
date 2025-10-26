import { FiPieChart, FiSettings, FiUser } from "react-icons/fi";

const menuItems = [
  {
    text: "Dashboard",
    icon: <FiPieChart />,
    path: "/dashboard",
  },
  {
    text: "Settings",
    icon: <FiSettings />,
    path: "/settings",
  },
  {
    text: "Profile",
    icon: <FiUser />,
    path: "/profile",
  },
];
export default menuItems;
