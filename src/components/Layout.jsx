// dep...
import { Outlet } from "react-router-dom";

// components
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(){
    return (
        <div className="">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}