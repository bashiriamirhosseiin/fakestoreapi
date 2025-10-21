// dep
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// icons
import { FaAngleLeft } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";

// store
import useWishlist from "../../store/useWishlist";


export default function SecHeader ({id}) {

    const [like, setLike] = useState(false)
    const {wishlist, add, remove} = useWishlist()
    
    const navigate = useNavigate();

    useEffect(()=>{
        setLike(wishlist.includes(id))
    }, [wishlist])

    const backHandler = useCallback(() => {
        navigate(-1);
    }, [])

    return (
        <div className="w-full flex justify-between items-center px-[6.4%] py-5 shadow-md mb-3">
           <FaAngleLeft size={19} onClick={backHandler} className="cursor-pointer"/>
            <p className="text-lg font-medium">Detail</p>
            { like ? <GoHeartFill size={19} color="#930000" onClick={()=>{remove(id)}} className="cursor-pointer" /> : <IoHeartOutline size={19} onClick={()=>{add(id)}} className="cursor-pointer" /> }
        </div>
    )
}