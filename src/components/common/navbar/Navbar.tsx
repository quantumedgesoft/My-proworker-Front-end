import { Link } from "react-router";

import CategoryMenu from "./CategoryMenu";
import PrimaryLogo from "./PrimaryLogo";
import "../../../styles/Navbar.css";
import NavSearch from "../../../utils/search/Search";
import RegistrantionBtn from "../../../utils/buttons/RegistrantionBtn";

const Navbar = () => {
  return (
    <nav className="navbar h-[107px] max-w-standard w-full mx-auto px-4 md:px-8 lg:px-21 bg-secondary">

      <div className="w-full h-full flex justify-center items-center text-white">
        <div className="w-full h-full flex items-center justify-between border-b-[2px] border-gray3/6">
          {/* Logo & Category */}
          <div className="w-[376px w-[29.51%] h-[64px] overflow-hidde flex justify-between items-center z-50">
            <PrimaryLogo />
            <CategoryMenu />
          </div>

          {/* Search Bar and Login/Registration */}
          <div className="w-[745px w-[58.448%] h-[50px] flex items-center justify-between">
            <NavSearch />

            <div className="flex items-center gap-[28px]">
              <Link to="">
                <button className="subtitle2 text-primary uppercase cursor-pointer">
                  Become a seller
                </button>
              </Link>

              <Link to="">
                <button className="subtitle2 text-white uppercase cursor-pointer">
                  Login
                </button>
              </Link>

              <RegistrantionBtn />
            </div>
          </div>
        </div>
      </div>
      
    </nav>

    // <nav className="border h-[107px] w-standard  mx-auto px-4 md:px-8 lg:px-21 bg-secondary">

    // </nav>
  );
};

export default Navbar;
