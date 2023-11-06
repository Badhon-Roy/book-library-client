import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";


const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? <LoadingPage></LoadingPage> :
                    <div className="max-w-[1400px] mx-auto md:px-5">
                        <Outlet></Outlet>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;