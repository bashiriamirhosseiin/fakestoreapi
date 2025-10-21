// dep...
import  { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// components
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./features/home/HomePage"));
const SingleProduct = lazy(()=> import("./features/singleProduct/SingleProduct"));
const CartPage = lazy(()=> import("./features/cart/CartPage"));
const WishlistPage = lazy(()=>import("./features/wishlist/WishlistPage"));


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "product/:id",
                element: <SingleProduct />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "wishlist",
                element: <WishlistPage />
            }
        ]
    }
])

export default router