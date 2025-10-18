// dep...
import { useParams } from "react-router-dom"
import api from "../../tools/api";
import { useQuery } from "@tanstack/react-query";

export default function SingleProduct(){

    // get id param:
    const {id} = useParams();
    
    // api get data:
    async function queryFn(){
        return await api.get(`products/${id}`)
    }

    const {data, isLoading, isError} = useQuery({
        queryKey: [`single-product-${id}`],
        queryFn
    })

    if(isLoading){
        return (
            <div className="">
                <p>Loading...</p>
            </div>
        )
    }

    if(isError) {
        return (
            <div className="">
                <p>Error...</p>
            </div>
        )
    }
    
    return (
        <div className="">
            <img src={data.image} alt="" />
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}$</p>
            <p>{data.rating.rate}({data.rating.count})</p>
        </div>
    )
}