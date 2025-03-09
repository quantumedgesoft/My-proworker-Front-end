import RegistrantionBtn from "../../../../utils/buttons/RegistrantionBtn";
import NavSearch from "../../../../utils/search/Search";
import TestMenu from "./TestMenu";

const Navbar = () => {
  return (
    <nav className="h-[107px] bg-secondary">
      <div className="w-max-standard mx-auto px-[83px] h-full flex justify-center items-center text-white ">
        <div className="w-full h-full flex items-center justify-between border-b-[2px] border-[rgb(204,204,204,0.6)]">
          {/* Logo & Category */}
          <div className="w-[376px w-[29.51%] h-[64px] overflow-hidde flex justify-between items-center">
            <div className="w-[234px] h-full">
              <img
                src="/src/assets/img/logo.png"
                alt="Myproworker Logo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <TestMenu />
          </div>

          {/* Search Bar and Login/Registration */}
          <div className="w-[745px w-[58.448%] h-[50px] flex items-center justify-between">
            <NavSearch />

            <div className="flex items-center gap-[28px]">
              <button className="subtitle2 text-primary uppercase">
                Become a seller
              </button>
              <button className="subtitle2 text-white uppercase">Login</button>
              <RegistrantionBtn />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
