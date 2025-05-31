import React from 'react'
import {Link} from "react-router-dom";

function CarCard({car, index}) {
    const {id, year, model, brand, price, engine, image302x302} = car
    const colors = [
        '#3c2c2a', '#394344', '#2b5b59', '#a6afaf', '#5d4e41', '#2b5b59', '#43512f', '#676770', '#25363b'
    ]
    const colorIndex = index % colors.length
    const backgroundColor = colors[colorIndex]
    return (
        <div className={"w-[20rem] lg:w-[40rem] p-5 rounded-4xl flex flex-col lg:flex-row "}>
            <div className={"bg-amber-100 rounded-t-2xl w-full lg:w-1/2 lg:rounded-l-2xl lg:rounded-r-none  h-50 lg:h-60"}>
                {/*image*/}
            </div>

            <div className={`p-5 flex flex-col justify-between rounded-b-2xl lg:rounded-r-2xl lg:rounded-l-none lg:w-1/2`} style={{ backgroundColor }}>
                <div>
                    <div className={"text-sm"}>
                        {year}
                    </div>
                    <div className={"flex gap-2 items-center"}>
                        <div className={"font-semibold"}>
                            {brand}
                        </div>
                        <div className={"text-sm text-center"}>
                            {model}
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col justify-between gap-2"}>
                    <div>
                        <div>
                            <div className={"text-lg"}>${price}</div>
                            <div className={"text-xs"}>Starting MSRP*</div>
                        </div>
                    </div>
                    <div className={"flex items-center text-xs font-semibold gap-4"}>
                        <Link to={`car/${id}`}>
                            <button
                                className={`w-24 bg-white hover:bg-gray-200 text-black rounded-4xl cursor-pointer flex items-center justify-center group transition-colors duration-300 px-3 py-1.5`}>
                                <div className="font-medium text-xs flex items-center justify-center">
    <span className={`transition-transform  duration-200 transform group-hover:-translate-x-1 ml-3 font-semibold`}>
      Explore
    </span>
                                    <span
                                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M10.5 15L13.5 12L10.5 9"
            stroke={`black`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
    </span>
                                </div>
                            </button>

                        </Link>
                        <button className={"flex items-center  cursor-pointer "}>
                            <div>
                                Build
                            </div>
                            <svg className="-rotate-90" width="30" height="30"
                                 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 10.5L12 13.5L15 10.5" stroke="white"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarCard
