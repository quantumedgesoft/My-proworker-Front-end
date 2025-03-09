import { useState } from "react";

const TestMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      name: "Design & Category",
      path: "",
      sub: false,
      icon: "/src/assets/icons/navbar/category-icons/digital marketing.png",
    },
    {
      id: 2,
      name: "Digital Marketing",
      path: "",
      sub: false,
      icon: "/src/assets/icons/navbar/category-icons/development & it.png",
    },
    {
      id: 3,
      name: "Development & IT",
      path: "",
      sub: true,
      submenu: [
        { name: "Snacks", link: "/products/snacks" },
        { name: "Pickle", link: "/products/pickle" },
        { name: "Soap", link: "/products/soap" },
        { name: "Candy", link: "/products/candy" },
      ],
      icon: "/src/assets/icons/navbar/category-icons/finance & Accounting.png",
    },
    {
      id: 4,
      name: "Finance & Accounting",
      path: "",
      sub: false,
      icon: "/src/assets/icons/navbar/category-icons/design & creative.png",
    },
    {
      id: 5,
      name: "Video & Animation",
      path: "",
      sub: false,
      icon: "/src/assets/icons/navbar/category-icons/video & animation.png",
    },
    {
      id: 6,
      name: "Writing & Translation",
      path: "",
      sub: false,
      icon: "/src/assets/icons/navbar/category-icons/writing & translation.png",
    },
  ];

  return (
    <div className="relative z-[999]">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="subtitle2 border border-primary w-[120px] h-[29px] bg-[rgb(85,196,26, 0.6)] bg-op rounded-[29px] text-primary flex items-center justify-center gap-[5px] shadow-md cursor-pointer"
      >
        <img src="/src/assets/icons/bx_category.svg" alt="category icon" />
        <p>Categories</p>
      </button>

      {openMenu && (
        <div className="absolute top-[69px] z-[999] flex flex-col  p-5 w-[288px] h-[323px] rounded-[4px] bg-white shadow-xl gap-2">
          {categories.map((cat, index) => (
            <div
              className="relative"
              onClick={() =>
                cat.submenu
                  ? setOpenSubmenu(openSubmenu === index ? null : index)
                  : setOpenMenu(false)
              }
            >
              <div className="w-full flex justify-between items-center gap-[11px] cursor-pointer">
                <div key={cat.id} className="flex items-center gap-[11px]">
                  <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary/10 ">
                    <img src={cat.icon} alt="" />
                  </div>

                  <div>
                    <p className="body2 text-gray2">{cat.name}</p>
                  </div>
                </div>

                {cat.sub && (
                  <div className="w-2 h-2">
                    <img
                      src="/src/assets/icons/navbar/category-icons/drop-down-icon.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>

              {cat.submenu && openSubmenu === index && (
                <div className="absolute top-0 left-[262px] flex flex-col  p-5 w-[288px] h-[323px] rounded-[4px] bg-white shadow-xl gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <p key={idx} className="body2 text-gray2 cursor-pointer">
                      SubMenu{idx}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestMenu;
