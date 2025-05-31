import Header from './Components/Shared/Header/Header.jsx'
import './index.css'
import HomePage from "./Components/HomePage/HomePage.jsx";
import {Routes, Route } from "react-router-dom";
import CarDetailsPage from "./Components/CarDetailsPage/CarDetailsPage.jsx";
import AllVehiclesPage from "./Components/AllVehiclesPage/AllVehiclesPage.jsx";
import Footer from "./Components/Shared/Footer/Footer.jsx";
// import Maintenance from "./Components/DiscoverVehicle/Featured/Maintenance.jsx";
import {useLocation} from "react-router-dom";
import PartCenterPage from "./Components/DIscover/Featured/PartsCenterPage/PartCenterPage.jsx";

function App() {
    const location = useLocation();

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/car/:id" element={<CarDetailsPage />} />
                <Route path="/all-vehicles" element={<AllVehiclesPage />} />
                <Route path={"/features/part-center"} element={<PartCenterPage />} />
            </Routes>

            {location.pathname === "/" && <Footer />}
        </div>
    );
}


export default App
