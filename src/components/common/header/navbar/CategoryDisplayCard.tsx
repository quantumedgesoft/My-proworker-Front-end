
const CategoryDisplayCard = () => {
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
    <div className="absolute mt-10 top- left- w-[288px] h-[323px] rounded-[4px] bg-white p-5 border">

      <div className="flex flex-col gap-[14px] ">
        {categories.map((cat) => (
          <div className="w-full flex justify-between items-center gap-[11px]">
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
        ))}
      </div>


    </div>
  );
};

export default CategoryDisplayCard;
