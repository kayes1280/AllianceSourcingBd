import { Outlet } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainRoutes(){
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}