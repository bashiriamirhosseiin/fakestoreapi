// dep...
import { useEffect } from "react";

// router
import { RouterProvider } from "react-router-dom"
import router from "./router"

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient();

// store
import useCart from "./store/useCart";
import useWishlist from "./store/useWishlist";


function App() {

  const {cart} = useCart()
  const {wishlist} = useWishlist()

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(()=>{
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
