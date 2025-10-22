// dep...
import { useQuery } from "@tanstack/react-query";
import api from "../../tools/api";

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
    queryFn,
  });

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
    <div className="h-full grid grid-rows-[auto_1fr_auto]">
      <div className="w-full">
        <MainHeader />
      </div>
      <div className="overflow-auto pt-4">
        <div className="w-full px-[25px] flex gap-[15px] flex-wrap justify-between">
          {data.map((item, index) => (
            <ProductItem
              key={index}
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
      <Footer />
    </div>
  );
}
