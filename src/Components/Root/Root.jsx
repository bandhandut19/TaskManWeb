import Navbar from "../Home/Navbar";
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto font-exo">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;