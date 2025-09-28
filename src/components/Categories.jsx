import { useEffect } from "react";
import Category from "./Category";

export default function Categories({ items }) {
  return (
    <div className="w-full px-[25px] mt-[14px] flex gap-4 items-center overflow-x-auto py-[10px] mb-[6px] shrink-0 overflow-y-clip">
      <div className="px-2 py-1 rounded-md bg-[#C67C4E] text-white font-semibold">
        <p className="whitespace-nowrap">All Categories</p>
      </div>
      {items.map((item, index) => (
        <Category key={index} name={item} />
      ))}
    </div>
  );
}
