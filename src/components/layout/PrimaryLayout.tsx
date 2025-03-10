import { Outlet } from "react-router";
import Navbar from "../common/navbar/Navbar";

const PrimaryLayout = () => {
  return (
    <div className="max-w-standard w-full mx-auto px-4 md:px-8 lg:px-21 bg-secondary">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PrimaryLayout;
