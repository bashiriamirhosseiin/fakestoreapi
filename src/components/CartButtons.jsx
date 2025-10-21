import { useCallback, useEffect, useState } from "react"
import useCart from "../store/useCart";

export default function CartButtons({id}){
    
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
            <button onClick={(e)=>{handleRemoveFromCart(e)}}>
                removeFromCart
            </button>
        )

    }else{

        return (
            <button onClick={(e)=>{handleAddToCart(e)}}>
                Add To Cart
            </button>
        )

    }
}