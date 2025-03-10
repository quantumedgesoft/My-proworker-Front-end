import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import CategoriesBtn from "../../../utils/buttons/CategoriesBtn";

const CategoryMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);


  const categories = [
    {
      id: 1,
      name: "Design & Category",
      path: "",
      sub: false,
      icon: "/assets/icons/navbar/category-icons/design & creative.png",
    },
    {
      id: 2,
      name: "Digital Marketing",
      path: "",
      sub: false,
      icon: "/assets/icons/navbar/category-icons/digital marketing.png",
    },
    {
      id: 3,
      name: "Development & IT",
      path: "",
      sub: true,
      submenu: [
        { name: "Design & Category", path: "" },
        { name: "Digital Marketing", path: "" },
        { name: "Development & IT", path: "" },
        { name: "Finance & Accounting", path: "" },
        { name: "Video & Animation", path: "" },
        { name: "Writing & Translation", path: "" },
      ],
      icon: "/assets/icons/navbar/category-icons/development & it.png",
    },
    {
      id: 4,
      name: "Finance & Accounting",
      path: "",
      sub: false,
      icon: "/assets/icons/navbar/category-icons/finance & Accounting.png",
    },
    {
      id: 5,
      name: "Video & Animation",
      path: "",
      sub: false,
      icon: "/assets/icons/navbar/category-icons/video & animation.png",
    },
    {
      id: 6,
      name: "Writing & Translation",
      path: "",
      sub: false,
      icon: "/assets/icons/navbar/category-icons/writing & translation.png",
    },
  ];


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
        setOpenSubmenu(null);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="relative z-[999]" ref={menuRef}>
      <CategoriesBtn setOpenMenu={setOpenMenu} openMenu={openMenu} />

      {openMenu && (
        <div className="absolute top-[69px] z-[999] flex flex-col  p-5 pb-10 w-[288px] h-[323px rounded-[4px] bg-white shadow-xl gap-2">
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
                <ul className="absolute top-[-96px] left-[262px] flex flex-col p-5 pb-8 w-[288px] h-[323px rounded-[4px] bg-white shadow-xl gap-4">
                  {cat.submenu.map((_, idx) => (
                    <Link
                      to=""
                      key={idx}
                      className="body2 text-gray2 cursor-pointer"
                    >
                      {item?.name}
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
