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


function App() {

  const {cart} = useCart()

  useEffect(()=>{
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
