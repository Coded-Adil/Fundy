import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <nav className="">
                {/* Navbar */}
                <Navbar />
            </nav>
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;