// dep...
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../tools/api";

// components
import CartItem from "./components/CartItem";

// store
import useCart from "../../store/useCart";

export default function CartPage() {

  const [showItems, setShowItems] = useState([]);
  const {cart, clear} = useCart();

  async function queryFn() {
    return await api.get("products");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-products"],
    queryFn,
  });

  useEffect(()=>{
    if(!isLoading && data) {
        const items = cart.map((item)=>{
          const product = data.find(p => p.id == item.id)
          return {
            ...product, 
            count: item.count
          }
        })
        setShowItems(items);
    }
  }, [data, cart])

  

  if (isLoading) {
    return (
      <div className="">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="">
        <p>Error...</p>
      </div>
    );
  }

  return (
    <div className="">
      {showItems.map((item, index) => (
        <CartItem 
          key={index}   
          id={item.id}
          title={item.title}  
          count={item.count}
        />
      ))}
      <hr />
      <button onClick={()=>{clear()}}>Clear</button>
    </div>
  )
}
