// dep
import { useState } from "react";

// icons
import { RiResetLeftFill } from "react-icons/ri";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="rounded-2xl bg-[#313131] h-[52px] w-full px-3">
        <input
          type="text"
          placeholder="Search Item"
          className="text-gray-100 h-full w-full bg-none outline-0 border-0"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div
        onClick={() => {
          setSearch("");
        }}
        className={search.length > 0 ? "transition-colors duration-300 shrink-0 w-[52px] h-[52px] bg-[#C67C4E] rounded-2xl flex justify-center items-center cursor-pointer" : "transition-colors duration-300 shrink-0 w-[52px] h-[52px] bg-[#c67c4e86] rounded-2xl flex justify-center items-center cursor-pointer"}
      >
        <RiResetLeftFill color="white" size={24} />
      </div>
    </div>
  );
}
