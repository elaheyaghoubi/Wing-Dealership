import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterAndSortCars, selectDisplayedCars, selectAllCars} from "../../Features/carSlice.js";

function CarDetailsPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const cars = useSelector(selectAllCars);
    const colors = [
        '#3c2c2a', '#394344', '#2b5b59', '#a6afaf', '#5d4e41', '#2b5b59', '#43512f', '#676770', '#25363b'
    ]

    const car = cars.find(car => car.id === +id);

    if (!car) {
        return <div className="p-8 text-center text-xl">Car not found</div>;
    }

    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const {year, brand, model, price} = car;

    return (
        <div className={"relative"}>
            <div className={"w-full h-100"} style={{backgroundColor}}>
                {/*image*/}
            </div>
            <div className={"absolute bottom-30 left-20 p-6 text-white"}>
                <div className={"flex items-center gap-2 text-6xl justify-start"}>
                    <div className={"font-bold"}>{year}</div>
                    <div className={"font-bold"}>{brand}</div>
                    <div className={"text-5xl font-bold"}>{model}</div>
                </div>
                <div className={"text-3xl mt-4"}>Starting MSRP $<span className={"font-bold"}>{price}</span></div>
            </div>
        </div>
    )
}

export default CarDetailsPage