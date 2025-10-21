// dep...
import { useCallback, useEffect, useState } from "react";

// store
import useWishlist from "../store/useWishlist";

export default function WishlistBtn({id}) {
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

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation();
    add(id);
  }, []);

  if (status) {
    return (
      <button
        onClick={(e) => {
          handleRemoveFromCart(e);
        }}
      >
        remove from wishlist
      </button>
    );
  } else {
    return (
      <button
        onClick={(e) => {
          handleAddToCart(e);
        }}
      >
        add to wishlist
      </button>
    );
  }
}
