import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterCars, selectFilteredCars} from "../../Features/carSlice.js";

function CarDetailsPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const filteredCars = useSelector(selectFilteredCars);
    const car = filteredCars.find(car => car.id === +id);

    return (
        <div>
            <div className={"w-full h-[60vh] bg-gray-500"}>
                {/*image*/}
            </div>
            <div>

            </div>
        </div>
    )
}

export default CarDetailsPage
