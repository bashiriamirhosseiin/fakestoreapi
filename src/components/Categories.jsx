import { useEffect } from "react"
import Category from "./Category"

export default function Categories ({items}) {

    return (
        <div className="">
            {items.map((item) => (
                <Category 
                    name={item}
                />
            ))}
        </div>
    )
}