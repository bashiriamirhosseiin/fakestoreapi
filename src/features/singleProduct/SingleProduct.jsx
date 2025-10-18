// dep...
import { useParams } from "react-router-dom"

export default function SingleProduct(){

    // get id param:
    const {id} = useParams();
    
    return (
        <div className="">
            <p>SingleProduct - {id}</p>
        </div>
    )
}