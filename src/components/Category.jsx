export default function Category ({name, onClick, filter}) {
    return (
        <div className={filter === name ? "transition-colors duration-200 px-2 py-1 rounded-md bg-[#C67C4E] text-white font-semibold" : "transition-colors duration-200 px-2 py-1 rounded-md"} onClick={()=>{onClick(name)}}>
            <p className="whitespace-nowrap">{name}</p>
        </div>
    )
}