import { LuPlus } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";

export default function Product({id,category,description,image,price,rating,title}) {
  return (
    <div className="w-[140px] p-2 flex flex-col ">
      <div className="relative w-full h-[130px] rounded-2xl overflow-clip p-2 mb-2 shadow-md">
        <img className="object-contain object-center" src={image} alt="" />
        <div className="absolute top-0 right-0 py-1 px-3 flex gap-1 items-center text-xs bg-[#92542e] text-white rounded-bl-2xl">
            <TiStarFullOutline color="#FBBE21" size={11}/>{rating.rate}
        </div>
      </div>
      <p className="font-semibold text-md mb-1">{title.substr(0, 9)}</p>
      <p className="text-xs text-gray-500 mb-2">{category.substr(0,9)}</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-[18px] font-semibold">${price}</p>
        <div className="text-white bg-[#C67C4E] flex justify-center items-center w-[34px] h-[34px] shrink-0 rounded-xl">
            <LuPlus />
        </div>
      </div>
    </div>
  );
}
