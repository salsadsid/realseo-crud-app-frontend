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
  {
    text: "Clients",
    icon: <FiUser />,
    path: "/clients",
  },
];
export default menuItems;
