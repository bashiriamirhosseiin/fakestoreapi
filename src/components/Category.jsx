export default function Category ({name, onClick}) {
    return (
        <div className="px-2 py-1 rounded-md" onClick={()=>{onClick(name)}}>
            <p className="whitespace-nowrap">{name}</p>
        </div>
    )
}