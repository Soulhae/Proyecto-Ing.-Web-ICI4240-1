import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

const Base = () => {
    return (
        <div style={{ backgroundColor: "#f8ffa9" }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Base;
