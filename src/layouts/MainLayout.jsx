import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1280px] w-[95%] mx-auto bg-[#f8f8f8]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;