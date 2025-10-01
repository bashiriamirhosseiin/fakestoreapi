import { useEffect } from "react";
import Category from "./Category";

export default function Categories({ items, onClick, filter }) {
  return (
    <div className=" w-full px-[25px] mt-[14px] flex gap-4 items-center overflow-x-auto py-[10px] mb-[6px] shrink-0 overflow-y-clip">
      <div className={filter === null ? "transition-colors duration-200 px-2 py-1 rounded-md bg-[#C67C4E] text-white font-semibold" : "transition-colors duration-200 px-2 py-1 rounded-md"} onClick={()=>{onClick(null)}}>
        <p className="whitespace-nowrap">All Categories</p>
      </div>
      {items.map((item, index) => (
        <Category key={index} onClick={onClick} name={item} filter={filter} />
      ))}
    </div>
  );
}
