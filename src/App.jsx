import Header from './Components/Shared/Header/Header.jsx'
import './index.css'
import HomePage from "./Components/HomePage/HomePage.jsx";
import {Routes, Route } from "react-router-dom";
import CarDetailsPage from "./Components/CarDetailsPage/CarDetailsPage.jsx";
function App() {
    return (
        <div >
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/car/:id" element={<CarDetailsPage />} />
            </Routes>

        </div>
    )
}

export default App
