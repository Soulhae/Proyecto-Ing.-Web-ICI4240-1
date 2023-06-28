//import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

import styles from "../styles/modules/Base.module.scss";

const Base = () => {
    return (
        <div className={styles.baseContainer}>
            {/* <Header /> */}
            <div className={styles.contentContainer}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Base;
