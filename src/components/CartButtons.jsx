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
    const handleRemoveFromCart = useCallback(()=>{
        remove(id);
    }, [])

    const handleAddToCart = useCallback(()=>{
        add(id);
    }, [])


    if(status){
    
        return (
            <button onClick={handleRemoveFromCart}>
                removeFromCart
            </button>
        )

    }else{

        return (
            <button onClick={handleAddToCart}>
                Add To Cart
            </button>
        )

    }
}