// dep...
import { useNavigate } from "react-router-dom"

// components
import CartButtons from "../../../components/CartButtons"
import WishlistBtn from "../../../components/WishlistBtn"

// icons
import { TiStarFullOutline } from "react-icons/ti";



export default function WishlistItem({
    id, 
    title,
    category,
    description,
    image,
    price,
    rate,
    rateCount
}) {

    const navigate = useNavigate()

    return (
        <div className="cursor-pointer w-[140px] p-2 flex flex-col" onClick={()=>{navigate(`product/${id}`)}}>
              <div className="relative w-full h-[130px] rounded-2xl overflow-clip p-2 mb-2 shadow-md">
                <img className="object-contain object-center" src={image} alt="" />
                <div className="absolute top-0 right-0 py-1 px-3 flex gap-1 items-center text-xs bg-[#92542e] text-white rounded-bl-2xl">
                  <TiStarFullOutline color="#FBBE21" size={11} />
                  {rate}
                </div>
              </div>
              <p className="font-semibold text-md mb-1">{title.substr(0, 9)}</p>
              <p className="text-xs text-gray-500 mb-2"><span>{category.substr(0, 9)}</span></p>
              <div className="w-full flex justify-between items-center">
                <p className="text-[15px] font-semibold">${price}</p>
                <div className="flex justify-end items-center gap-1">
                  <WishlistBtn id={id} />
                  <CartButtons id={id} />
                </div>
                
              </div>
            </div>
    )
}