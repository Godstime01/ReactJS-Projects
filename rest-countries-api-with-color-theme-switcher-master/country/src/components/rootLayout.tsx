import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main className="mt-10 max-w-screen-xl mx-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout