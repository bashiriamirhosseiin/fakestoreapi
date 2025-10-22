// dep
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// store
import useCart from "../../../store/useCart";

// icons
import { MdDeleteOutline } from "react-icons/md";

export default function CartItem({ id, title, image, category, price, count }) {
  const navigate = useNavigate();
  const { remove, increase, decrease } = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(price * count);
  }, [count]);

  const clickHandler = useCallback(() => {
    navigate(`/product/${id}`);
  }, []);

  return (
    <div className="w-full flex justify-between items-center py-2">
      <div className="shrink-0 h-full flex justify-center items-center pr-3">
        <MdDeleteOutline
          size={23}
          color="#800"
          className="cursor-pointer"
          onClick={() => {
            remove(id);
          }}
        />
      </div>

      <div
        className="shrink-0 w-[50px] h-[50px]  overflow-clip rounded  cursor-pointer"
        onClick={clickHandler}
      >
        <img src={image} alt="" />
      </div>
      <div
        className="w-full flex flex-col px-2 justify-evenly items-start"
        onClick={clickHandler}
      >
        <p className="text-md font-semibold">{title.substr(0, 9)}</p>
        <p className="text-sm font-semibold text-gray-500">
          {category.substr(0, 9)}
        </p>
      </div>
      <div className="shrink-0 flex flex-col items-end">
        <div className="flex items-center">
          <p className="text-sm font-bold text-[#8d4f29]">${totalPrice}</p>
          <p className="ml-2 text-gray-500 text-xs font-semibold">{price}</p>
        </div>
        <div className="flex items-center w-full justify-end gap-2">
          <p
            onClick={() => {
              decrease(id);
            }}
            className="font-bold text-gray-600 cursor-pointer"
          >
            -
          </p>
          <p className="font-bold text-gray-800">{count}</p>
          <p
            onClick={() => {
              increase(id);
            }}
            className="font-bold text-gray-600  cursor-pointer"
          >
            +
          </p>
        </div>
      </div>
    </div>
  );
}
