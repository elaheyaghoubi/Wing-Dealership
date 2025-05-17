import React, {useEffect} from 'react'
import {useDispatch, useSelector, batch} from "react-redux";
import {
    filterAndSortCars,
    selectDisplayedCars,
} from "../../Features/carSlice.js";
import VehicleCard from "./VehicleCard.jsx";

function AllVehiclesPage() {
    const dispatch = useDispatch();
    const cars = useSelector(selectDisplayedCars);

    console.log(cars)
    useEffect(() => {
        dispatch(filterAndSortCars({ filter: "All", sort: "a-z" }));
    }, [dispatch]);
    if (!cars) return <div>Loading cars...</div>;
    if (!Array.isArray(cars)) return <div>Error loading cars</div>;
    return (
        <div>
            <div className={"AllVehiclesPage-header text-center mt-9"}>
                <div className={"text-5xl font-bold"}>Vehicles</div>
                <div className={"text-l mt-4"}>Find your perfect vehicle. Narrow it down by price, mpg or whatever you like.</div>
            </div>
            <div className={"AllVehiclesPage-content bg-gray-100 p-7"}>
                <div className={"text-3xl font-thin"}>{cars.length} Matches</div>
                <div className={"grid grid-cols-3 gap-4"}>
                    {cars.map(car => (
                        car?.id ? (  // Only render if car exists and has id
                            <div key={car.id}>
                                <VehicleCard car={car} />
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllVehiclesPage
