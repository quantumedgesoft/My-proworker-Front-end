import { Dispatch, FC, SetStateAction } from "react";

interface CategoriesBtnProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openMenu: boolean;
}

const CategoriesBtn: FC<CategoriesBtnProps> = ({ setOpenMenu, openMenu }) => {
  const haandleCateegoryState = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <button
      onClick={haandleCateegoryState}
      className="subtitle2 border border-primary w-[120px] h-[29px] bg-[rgb(85,196,26, 0.6)] bg-op rounded-[29px] text-primary flex items-center justify-center gap-[5px] shadow-md cursor-pointer"
    >
      <img src="/assets/icons/bx_category.svg" alt="category icon" />
      <p>Categories</p>
    </button>
  );
};

export default CategoriesBtn;
