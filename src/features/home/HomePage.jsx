// deps
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import api from "../../tools/api";

// components
import ProductItem from "./components/ProductItem";
import MainHeader from "../../components/header/MainHeader";
import Footer from "../../components/Footer";

// loadings
import ProductLoading from "../../components/loadings/ProductLoading";
import Error from "../../components/Error";

export default function HomePage() {
  const [error, setError] = useState(false);

  async function queryFn() {
    const res = await api.get("products");
    return res;
  }

  // ✅ useQuery برای مدیریت وضعیت‌ها
  const { data, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn,
  });

  useEffect(() => {
    if (data && data?.status) {
      setError(true);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="h-full grid grid-rows-[auto_1fr_auto]">
        <MainHeader />
        <div className="overflow-clip pt-4 px-[6.4%]">
          <ProductLoading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full grid grid-rows-[auto_1fr_auto]">
        <MainHeader />
        <div className="overflow-clip pt-4 px-[6.4%]">
          <ProductLoading />
        </div>
        <Error />
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
          {data?.map?.((item) => (
            <ProductItem
              key={item?.id}
              id={item?.id}
              category={item?.category}
              title={item?.title}
              description={item?.description}
              image={item?.image}
              price={item?.price}
              rate={item?.rating?.rate}
              rateCount={item?.rating?.count}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
