import "./PrimarySearch.css";

const PrimarySearch = () => {
  return (
    <div className="w-[556px] mx-auto flex flex-col gap-4">
      <div className="PrimarySearch h-[56px] p-[3px] rounded-[29px]">
        <div className="w-full h-full bg-secondary rounded-[29px]">
          <div className="w-full h-full bg-white/10 rounded-[29px] flex items-center justify-between pl-4 pr-1">
            <input
              type="text"
              placeholder="Search your needs"
              className="w-[350px] h-full rounded-l-[29px] pl-2 focus:outline-none text-white"
            />

            <div className="flex justify-between items-center w-[200px]">
              <div>
                <div className="flex items-center">
                  <p className="subtitle1 text-white w-full">Web Developer</p>
                  <img src="/assets/icons/light_arrow-drop-down.svg" alt="" />
                </div>
              </div>

              <div className="w-[46px] h-[46px] bg-primary text-white rounded-full flex justify-center items-center">
                <img
                  src="/assets/icons/search/primary search.png"
                  alt=""
                  className="w-6  h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 w-full flex justify-center items-center gap-6">
        <p className="text-gray2 body1">Popular Jobs:</p>

        <div className="h-full text-gray1 subtitle2 flex items-center gap-5">
          <button>UI/UX Design</button>
          <button className="subtitle2 bg-white/10 px-[12.5px] h-full rounded-[22px] text-white ">
            Web Developer
          </button>
          <button>Software Engineer</button>
        </div>
      </div>
    </div>
  );
};

export default PrimarySearch;
