// dep...
import { useQuery } from "@tanstack/react-query"
import api from "../../tools/api"

// components
import ProductItem from "./components/ProductItem";

export default function HomePage() {

    async function queryFn() {
        return await api.get("products");
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["all-products"],
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

    console.log(data);
    

    return (
        <div className="">
            {data.map((item, index)=>(
                <ProductItem 
                    key={index}
                    id={item.id} 
                    title={item.title} 
                    description={item.description} 
                    image={item.image} 
                    price={item.price} 
                    rate={item.rating.rate} 
                    rateCount={item.rating.count} 
                />
            ))}
            
        </div>
    )
}