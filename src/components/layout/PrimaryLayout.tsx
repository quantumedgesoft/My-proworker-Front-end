import { Outlet } from "react-router";
import Nvabar from "../common/header/navbar/Navbar";

const PrimaryLayout = () => {
  return (
    <div className="w-full">
      <Nvabar />
      <Outlet />
    </div>
  );
};

export default PrimaryLayout;
