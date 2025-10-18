import { useCallback, useEffect, useState } from "react"

export default function CartButtons({id}){
    
    const [status, setStatus] = useState(false);
    useEffect(()=>{
        // check item is in cart or not
    }, [])

    // functions...
    const handleRemoveFromCart = useCallback(()=>{

    }, [])

    const handleAddToCart = useCallback(()=>{

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