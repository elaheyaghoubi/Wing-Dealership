import React from 'react'
import {Link} from "react-router-dom";

function VehicleCard({car}) {
    if (!car) return null;
    const {id, year, model, brand, price} = car || {};

    return (
        <div className={"VehicleCard bg-white flex flex-col p-7 border-1 rounded-sm border-gray-200 hover:shadow-xl cursor-pointer"}>
            <div className={"bg-amber-100 h-30"}>
                {/*image*/}
            </div>
            <div className={"mt-3"}>
                <div>
                    <div>{year}</div>
                    <div className={"flex items-center gap-2 font-semibold text-lg"}>
                        <div>{brand}</div>
                        <div>{model}</div>
                    </div>
                    <div>
                        <div className={""}>${price}</div>
                        <div className={"text-xs"}>Starting MSRP*</div>
                    </div>
                </div>
                <div className={"text-red-700 font-semibold flex items-center gap-6 mt-3"}>
                    <Link to={`/car/${id}`}>
                        <div
                            className={"hover:border-b-2 border-b-2 border-white transition ease-in-out hover:border-red-700 cursor-pointer"}>Explore
                        </div>
                    </Link>
                    <div
                        className={"hover:border-b-2 border-b-2 border-white transition ease-in-out hover:border-red-700 cursor-pointer"}>Build
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleCard
