// dep...
import { useQuery } from "@tanstack/react-query"
import api from "../../tools/api"

// components
import ProductItem from "./components/ProductItem";
import MainHeader from "../../components/header/MainHeader";
import Footer from "../../components/Footer";

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

    return (
        <div className="h-full flex flex-col">
            <div className="w-full">
                <MainHeader />
            </div>
            <div className="w-full grow-1 h-full flex flex-col justify-between">
                <div className="w-full grow-1 bg-green-500">content</div>
                <Footer />
            </div>
          
            {/* {data.map((item, index)=>(
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
            ))} */}
            
        </div>
    )
}