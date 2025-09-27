import { IoIosArrowDown } from "react-icons/io";
import SearchBox from "./SearchBox";

export default function Header ({name, location}) {
    return (
        <div className="w-full pt-[40px] px-[25px] pb-[24px] bg-header">
            <p className="text-xs text-[#a2a2a2] mb-2">Location</p>
            <p className="text-[14px] text-[#d8d8d8] flex items-center gap-1 mb-[24px]">{location} <IoIosArrowDown /></p>
            <SearchBox />
        </div>
    )
}