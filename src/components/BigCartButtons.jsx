// dep
import { useCallback, useEffect, useState } from "react"

// store
import useCart from "../store/useCart";

// icons
import { LuPlus } from "react-icons/lu";
import { BsX } from "react-icons/bs";

export default function BigCartBtn({id}){
    
    const [status, setStatus] = useState(false);
    const {cart, add, remove} = useCart();
    
    useEffect(()=>{
        const foundItemIndex  = cart.findIndex((item)=> item.id == id);
        if(foundItemIndex >= 0){
            setStatus(true);
        }else{
            setStatus(false);
        }
    }, [cart])

    // functions...
    const handleRemoveFromCart = useCallback((e)=>{
        e.stopPropagation();
        remove(id);
    }, [])

    const handleAddToCart = useCallback((e)=>{
        e.stopPropagation();
        add(id);
    }, [])


    if(status){
    
        return (
<div onClick={handleRemoveFromCart}  className="cursor-pointer transition-colors duration-300 shrink-0 w-[57%] h-[55px] rounded-2xl bg-red-800 text-white font-semibold flex justify-center items-center">Remove Now</div>
        )

    }else{

        return (
         <div onClick={handleAddToCart} className="cursor-pointer transition-colors duration-300 shrink-0 w-[57%] h-[55px] rounded-2xl bg-[#C67C4E] text-white font-semibold flex justify-center items-center">Buy Now</div>
        )

    }
}