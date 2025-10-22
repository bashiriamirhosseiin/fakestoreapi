// dep...
import { useCallback, useEffect, useState } from "react";

// store
import useWishlist from "../store/useWishlist";

// icons
import { IoHeartOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";

export default function WishlistBtn({ id }) {
  const [status, setStatus] = useState(false);
  const { wishlist, add, remove } = useWishlist();

  useEffect(() => {
    setStatus(wishlist.includes(id));
  }, [wishlist]);

  // functions...
  const handleRemoveFromWishlist = useCallback((e) => {
    e.stopPropagation();
    remove(id);
  }, []);

  const handleAddToWishlist = useCallback((e) => {
    e.stopPropagation();
    add(id);
  }, []);

  if (status) {
    return (
      <GoHeartFill
        size={19}
        color="#930000"
        onClick={handleRemoveFromWishlist}
        className="cursor-pointer"
      />
    );
  } else {
    return (
      <IoHeartOutline
        size={19}
        onClick={handleAddToWishlist}
        className="cursor-pointer"
      />
    );
  }
}
