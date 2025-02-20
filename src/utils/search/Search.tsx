const NavSearch = () => {
  return (
    <div className="w-[345px w-[46.3%] h-[50px] px-[10px] py-[7px] flex items-center gap-2 bg-[rgba(136,136,136,0.22)] rounded-[8px]">
      <button className="w-[122px] h-[36px] bg-[rgba(136,136,136,0.22)] flex justify-center items-center subtitle2 rounded-[6px]">
        Freelancer
        <img
          src="/src/assets/icons/light_arrow-drop-down.svg"
          alt="light_arrow-drop-down"
        />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="w-[calc(100% - 122px)] h-full body2 focus:outline-none"
      />
    </div>
  );
};

export default NavSearch;
