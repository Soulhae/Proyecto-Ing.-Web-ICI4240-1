import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from 'react-router-dom';

const Base = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Base