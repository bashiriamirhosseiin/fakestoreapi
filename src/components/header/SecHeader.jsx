// dep
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

// icons
import { FaAngleLeft } from "react-icons/fa6";

// store
import WishlistBtn from "../WishlistBtn";


export default function SecHeader ({id}) {

    const [like, setLike] = useState(false)
    
    const navigate = useNavigate();

    const backHandler = useCallback(() => {
        navigate(-1);
    }, [])

    return (
        <div className="w-full flex justify-between items-center px-[6.4%] py-5 shadow-md mb-3">
           <FaAngleLeft size={19} onClick={backHandler} className="cursor-pointer"/>
            <p className="text-lg font-medium">Detail</p>
            <WishlistBtn id={id} />
        </div>
    )
}