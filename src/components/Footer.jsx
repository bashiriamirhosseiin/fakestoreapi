import { GoHomeFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiBell } from "react-icons/fi";

export default function Footer() {
    return (
        <div className="w-full py-[24px] px-[25px] flex justify-evenly items-center rounded-t-2xl border-t-3 border-[#ddd]">
            <GoHomeFill color="#C67C4E" size={24}/>
            <FaRegHeart color="#888" size={19}/>
            <HiOutlineShoppingBag color="#888" size={22}/>
            <FiBell color="#888" size={21}/>
        </div>
    )
}