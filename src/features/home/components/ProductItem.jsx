import { useNavigate } from "react-router-dom"
import CartButtons from "../../../components/CartButtons"

export default function ProductItem({
    id, 
    title,
    description,
    image,
    price,
    rate,
    rateCount
}) {

    const navigate = useNavigate()

    return (
        <div className="" onClick={()=>{navigate(`product/${id}`)}}>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{description}</p>
            <p>{rate}({rateCount})</p>
            <p>{price}$</p>
            <CartButtons id={id}/>
        </div>
    )
}