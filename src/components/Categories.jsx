import { useEffect } from "react"
import Category from "./Category"

export default function Categories ({items}) {

    return (
        <div className="">
            {items.map((item, index) => (
                <Category 
                    key={index}
                    name={item}
                />
            ))}
        </div>
    )
}