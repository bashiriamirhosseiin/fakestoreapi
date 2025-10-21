// store
import useCart from "../../../store/useCart"

export default function CartItem ({id, title, count}) {
    const {remove, increase, decrease} = useCart()

    return (
        <div className="">
            <p>{title}</p>
            <p>count: {count}</p>
            <p><button onClick={()=>{remove(id)}}>Delete</button></p>
            <p><button onClick={()=>{increase(id)}}>Increase</button></p>
            <p><button onClick={()=>{decrease(id)}}>Decrease</button></p>
        </div>
    )
}