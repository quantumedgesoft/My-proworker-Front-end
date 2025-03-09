import { useState } from "react";

const CategoriesBtn = () => {
  const [categoryIsOpen, setCategoryIsOpen] = useState(false);

  const haandleCateegoryState = () => {
    setCategoryIsOpen(!categoryIsOpen);
  };

  return (
    <div className="">
      <button
        onClick={haandleCateegoryState}
        className="subtitle2 border border-primary w-[120px] h-[29px] bg-[rgb(85,196,26, 0.6)] bg-op rounded-[29px] text-primary flex items-center justify-center gap-[5px] shadow-md"
      >
        <img src="/assets/icons/bx_category.svg" alt="category icon" />
        <p>Categories</p>
      </button>


      
    </div>
  );
};

export default CategoriesBtn;
