// dep...
import { useEffect, useState } from "react";
import api from "../../tools/api";
import { useQuery } from "@tanstack/react-query";

// store
import useWishlist from "../../store/useWishlist";

// components
import ThirdHeader from "../../components/header/ThirdHeader";
import WishlistItem from "./components/WishlistItem";

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
    <div className="h-full grid grid-rows-[auto_1fr_auto] pb-4">
      <div className="w-full">
        <ThirdHeader title={"Wish List"} />
      </div>
      <div className="overflow-auto pt-4">
        <div className="w-full px-[25px] flex gap-[15px] flex-wrap justify-between">
            {showItems?.map((item) => (
              <WishlistItem
                key={item.id}
                id={item.id}
                category={item.category}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                rate={item.rating.rate}
                rateCount={item.rating.count}
              />
            ))}
        </div>
      </div>
      <div className="w-full px-[6.4%]">
        {wishlist.length > 0 && (
          <button
            className="cursor-pointer transition-colors duration-300 shrink-0 w-full h-[55px] rounded-2xl bg-[#C67C4E] text-white font-semibold flex justify-center items-center"
            onClick={() => {
              clear();
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
