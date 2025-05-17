import Header from './Components/Shared/Header/Header.jsx'
import './index.css'
import HomePage from "./Components/HomePage/HomePage.jsx";
import {Routes, Route } from "react-router-dom";
import CarDetailsPage from "./Components/CarDetailsPage/CarDetailsPage.jsx";
import AllVehiclesPage from "./Components/AllVehiclesPage/AllVehiclesPage.jsx";

function App() {
    return (
        <div >
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/car/:id" element={<CarDetailsPage />} />
                <Route path="/all-vehicles" element={<AllVehiclesPage />} />
            </Routes>

        </div>
    )
}

export default App
