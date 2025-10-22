// dep...
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../tools/api";

// components
import CartItem from "./components/CartItem";
import ThirdHeader from "../../components/header/ThirdHeader";
import PaymentInfo from "./components/PaymentInfo";
import DeliveryInfo from "./components/DeliveryInfo";
import Error from "../../components/Error";


// store
import useCart from "../../store/useCart";
import CartLoading from "../../components/loadings/CartLoading";

export default function CartPage() {
  const [showItems, setShowItems] = useState([]);
  const [error, setError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useCart();

  async function queryFn() {
    return await api.get("products");
  }

  const { data, isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn,
  });

  useEffect(() => {
    if (data && data?.status) {
      setError(true);
    } else {
      if (!isLoading && data) {
        const items = cart.map((item) => {
          const product = data.find((p) => p.id == item.id);
          return {
            ...product,
            count: item.count,
          };
        });
        setShowItems(items);
      }
    }
  }, [data, cart]);

  useEffect(() => {
    var total = 0;
    showItems.map((item) => {
      total += item.price * item.count;
    });

    setTotalPrice(total);
  }, [showItems]);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col justify-between pb-3">
        <ThirdHeader title={"Cart"} />
        <DeliveryInfo />
        <div className="px-[6.4%] py-2">
          <hr className="w-full text-gray-400" />
        </div>
        <div className="w-full px-[6.4%] overflow-hidden grow-1">
          <CartLoading />
        </div>
        <div className="px-[6.4%] py-2">
          <hr className="w-full text-gray-400" />
        </div>
        <PaymentInfo total={totalPrice} fee={10} />
        <div className="px-[6.4%] mt-3">
          <button className="cursor-pointer w-full py-3 flex justify-center items-center text-lg text-white rounded-2xl bg-[#C67C4E]">
            Order
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col justify-between pb-3">
        <ThirdHeader title={"Cart"} />
        <DeliveryInfo />
        <div className="px-[6.4%] py-2">
          <hr className="w-full text-gray-400" />
        </div>
        <div className="w-full px-[6.4%] overflow-auto grow-1">
          {/*  */}
        </div>
        <div className="px-[6.4%] py-2">
          <hr className="w-full text-gray-400" />
        </div>
        <PaymentInfo total={totalPrice} fee={10} />
        <div className="px-[6.4%] mt-3">
          <button className="cursor-pointer w-full py-3 flex justify-center items-center text-lg text-white rounded-2xl bg-[#C67C4E]">
            Order
          </button>
        </div>
        <Error />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-between pb-3">
      <ThirdHeader title={"Cart"} />
      <DeliveryInfo />
      <div className="px-[6.4%] py-2">
        <hr className="w-full text-gray-400" />
      </div>
      <div className="w-full px-[6.4%] overflow-auto grow-1">
        {showItems?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            category={item.category}
            price={item.price}
            count={item.count}
          />
        ))}
      </div>
      <div className="px-[6.4%] py-2">
        <hr className="w-full text-gray-400" />
      </div>
      <PaymentInfo total={totalPrice} fee={10} />
      <div className="px-[6.4%] mt-3">
        <button className="cursor-pointer w-full py-3 flex justify-center items-center text-lg text-white rounded-2xl bg-[#C67C4E]">
          Order
        </button>
      </div>
    </div>
  );
}
