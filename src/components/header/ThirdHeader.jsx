import { Link } from "react-router-dom";

// icons
import { FaAngleLeft } from "react-icons/fa6";

export default function ThirdHeader ({title}) {
    return (
        <div className="flex justify-between items-center px-[6.4%] py-5 shadow-md mb-3">
            <Link to="/"><FaAngleLeft size={19} /></Link>
            <p className="text-lg font-semibold">{title}</p>
            <p className="w-[19px]"></p>
        </div>
    )
}