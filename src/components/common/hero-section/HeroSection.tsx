import HereoImageContainer from "./primary-search-bar/HereoImageContainer";
import PrimarySearch from "./primary-search-bar/PrimarySearch";
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="mt-[53px]">
      <div>
        <h1 className="font-rajdhani text-center text-white">
          Find The Perfect Freelance Services <br /> for Your Business
        </h1>
      </div>

      <div className="mt-6">
        <PrimarySearch />
      </div>

      <HereoImageContainer />
    </div>
  );
};

export default HeroSection;
