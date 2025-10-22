// dep...
import { useParams } from "react-router-dom";
import api from "../../tools/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// components
import SecHeader from "../../components/header/SecHeader";
import BigCartBtn from "../../components/BigCartButtons";
import WishlistBtn from "../../components/WishlistBtn";

// icons
import { TiStarFullOutline } from "react-icons/ti";
import SinglePageLoading from "../../components/loadings/SinglePageLoading";
import Error from "../../components/Error";

export default function SingleProduct() {
  // get id param:
  const { id } = useParams();

  const [error, setError] = useState(false);

  // api get data:
  async function queryFn() {
    return await api.get(`products/${id}`);
  }

  const { data, isLoading } = useQuery({
    queryKey: [`single-product-${id}`],
    queryFn,
  });

  useEffect(() => {
    console.log(data);
    
    if (data && data?.status) {
      setError(true);
    }
  }, [data]);


  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-col">
        <SecHeader id={-1} />
        <SinglePageLoading /> 
      </div>
    );
  }

  if (error) {
    return (
     <div className="w-full h-full flex flex-col">
        <SecHeader id={-1} />
        <SinglePageLoading /> 
        <Error />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      <SecHeader id={data?.id} />
      <div className="w-full flex-1 flex flex-col justify-between pb-3">
        <div className="w-full px-[6.4%]">
          <div className="rounded-2xl shadow-xl flex flex-col justify-center items-center p-6">
            <img src={data?.image} alt="" className="h-[180px]" />
          </div>
        </div>
        <div className="w-full grow-1 px-[6.4%] flex flex-col items-center mt-4">
          <p className="w-full text-xl font-bold pr-2 text-[#222]">
            {data?.title?.substring(0, 19)}
          </p>
          <p className="w-full text-xs font-semibold text-[#888]">
            {data?.category}
          </p>
          <div className="w-full mt-2 flex gap-1 items-center text-md font-semibold text-[#333]">
            <TiStarFullOutline color="#FBBE21" size={19} />
            {data?.rating?.rate}{" "}
            <span className="text-xs font-medium text-gray-500">
              ({data?.rating?.count})
            </span>
          </div>
          <hr className="w-[90%] mt-2 text-[#c7c7c7]" />
          <div className="w-full pt-1">
            <p className="text-lg font-semibold text-[#333]">Description</p>
            <p className="text-sm mt-2 text-justify text-[#666]">
              {data?.description?.substring(0, 120)}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center px-[6.4%]">
          <div className="max-w-[100px] flex flex-col justify-center items-center">
            <p className="text-sm font-semibold text-[#666]">Price</p>
            <p className="text-lg font-bold text-[#C67C4E]">${data?.price}</p>
          </div>
          <div className="w-full flex justify-end items-center gap-2">
            <WishlistBtn id={data?.id} />
            <BigCartBtn id={data?.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
