import { Outlet } from "react-router";
import Nvabar from "../common/header/navbar/Nvabar";

const PrimaryLayout = () => {
  return (
    <div>
      <Nvabar/>
      <Outlet />
      Footer
    </div>
  );
};

export default PrimaryLayout;
