// dep...
import { useEffect, useState } from "react";
import api from "../../tools/api";
import { useQuery } from "@tanstack/react-query";

// store
import useWishlist from "../../store/useWishlist";

// components
import ProductItem from "../home/components/ProductItem";


export default function WishlistPage() {
  const [showItems, setShowItems] = useState([]);
  const { wishlist, clear } = useWishlist();

  async function queryFn() {
    return await api.get("products");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-products"],
    queryFn,
  });

  useEffect(() => {
    if (!isLoading && data) {
      const items = wishlist.map((itemId) => {
        const product = data.find((p) => p.id == itemId);
        return {
          ...product,
        };
      });
      setShowItems(items);
    }
  }, [data, wishlist]);

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
      <hr />
      <button
        onClick={() => {
          clear();
        }}
      >
        Clear
      </button>
    </div>
  );
}
