import Navbar from "../Navbar/Navbar";
import { Outlet as Page } from "react-router"

export default function Layout(){
    return(
        <main>
            <Navbar />
            <Page />
        </main>
    )
}