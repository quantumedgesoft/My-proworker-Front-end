const Nvabar = () => {
  return (
    <div className="w-standard h-[107px] mx-auto px-p83 flex justify-center items-center bg-secondary text-white">
      <div className="w-full border">
        {/* Logo & Category */}
        <div className="w-[376px] h-[64px] overflow-hidden">
          <div className="w-[234px] h-full">
            <img
              src="/src/assets/img/logo.png"
              alt="Myproworker Logo"
              className="w-full h-full border object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nvabar;
