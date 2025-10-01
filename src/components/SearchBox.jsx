import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox ({searchClick}) {

    const [search, setSearch] = useState("");

    return (
        <div className="flex justify-between items-center gap-4">
            <div className="rounded-2xl bg-[#313131] h-[52px] w-full px-3">
                <input type="text" placeholder="Search Item" className="text-gray-100 h-full w-full bg-none outline-0 border-0" onChange={(e)=>{setSearch(e.target.value)}}/>
            </div>
            <div className="shrink-0 w-[52px] h-[52px] bg-[#C67C4E] rounded-2xl flex justify-center items-center" onClick={()=>{searchClick(search)}}><FaSearch color="white"/></div>
        </div>
    )
}