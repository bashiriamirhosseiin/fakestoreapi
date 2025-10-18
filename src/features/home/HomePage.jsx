// dep...
import { useQuery } from "@tanstack/react-query"
import api from "../../tools/api"

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
            <p>This is home page</p>
        </div>
    )
}