// dep...
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div className="max-w-[400px] mx-auto h-screen">
            <Outlet />
        </div>
    )
}