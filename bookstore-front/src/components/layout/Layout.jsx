import Hero from "./Hero";
import MainNavbar from './Navbar'
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

//Layout wrapper shared by all pages - includes header, footer and routed content
export default function Layout() {
    return (
        <>
            <MainNavbar />
            <Hero></Hero>
            <Outlet />
            <Footer></Footer>
        </>
    )
}