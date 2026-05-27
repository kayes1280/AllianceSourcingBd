import { Outlet } from "react-router";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";

export default function MainRoutes(){
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}