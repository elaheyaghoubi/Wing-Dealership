import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
    applyFilters,
    selectDisplayedCars, setPriceFilter, setCategoryFilter, setSortOption, resetFilters, setYearFilter
} from "../../Features/carSlice.js";
import VehicleCard from "./VehicleCard.jsx";
import Select from 'react-select';
import Slider from "../Shared/Slider/Slider.jsx";

const FilterSectionDesktop = () => {
    const vehicleTypes = ["Electric/Hybrid", "SUV", "Sedan", "Sports", "Truck"];
    const dispatch = useDispatch();
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [showFilter, setShowFilter] = useState(["vehicles", "year", "price"]);
    const [sliderValue, setSliderValue] = useState([20000, 180000]);

    const handleSetValue = (newValue) => {
        if (newValue[0] >= newValue[1]) {
            setSliderValue([Math.min(newValue[0], sliderValue[1]), Math.max(newValue[0], sliderValue[1])]);
        } else {
            setSliderValue(newValue);
        }

        dispatch(setPriceFilter({min: sliderValue[0], max: sliderValue[1]}))
        dispatch(applyFilters())

    };
    const onChangeApplyFilter = (e, filter) => {
        const {value, checked} = e.target;
        if(filter === "vehicles"){
            console.log(e.target.value);
            dispatch(setCategoryFilter(e.target.value))
            dispatch(applyFilters())
            setSelectedVehicle(checked ? value : null);
        }else if(filter === "year"){
            // console.log(+e.target.value);
            setSelectedYear(checked ? +value : null);
            dispatch(setYearFilter(value))
            dispatch(applyFilters())
        }
    };

    const onClickShowFilterOptions = (category) => {
        if (!showFilter.includes(category)) {
            setShowFilter(prevState => [...prevState, category]);
        } else {
            setShowFilter(prevState => prevState.filter(item => item !== category));
        }
        // console.log(showFilter)
    };


    return (
        <div className={"lg:block filterSectionDesktop p-6"}>
            <div className={"font-bold text-xl my-5"}>Filters</div>
            <hr/>
            <div>
                <div className={"filterSectionDesktop-vehicles-section"}>
                    <div
                        className={"flex justify-between items-center my-3"}
                        onClick={() => onClickShowFilterOptions("vehicles")}
                    >
                        <div className={" hover:border-gray-600 cursor-pointer border-b-2 border-transparent"}>Vehicles
                        </div>
                        {!showFilter.includes("vehicles") &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5L12 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M19 12H5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>}
                        {showFilter.includes("vehicles") &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        }

                    </div>
                    <div>
                        {showFilter.includes("vehicles") &&
                            <form className={"flex flex-col"} action="">
                                {
                                    vehicleTypes.map((vehicle, index) => (
                                        <label key={index} className="inline-flex items-center font-semibold p-1">
                                            <input
                                                type="checkbox"
                                                name="vehicleType"
                                                value={vehicle}
                                                checked={selectedVehicle === vehicle}
                                                onChange={(event) => onChangeApplyFilter(event,"vehicles")}
                                                className="custom-checkbox focus:ring-black focus:ring-offset-0"
                                            />
                                            <span className="ml-2 text-gray-700">{vehicle}</span>
                                        </label>
                                    ))
                                }
                            </form>
                        }
                    </div>
                    <hr/>
                </div>
                <div className="filterSectionDesktop-price-section">
                    <div
                        className={"flex justify-between items-center my-3"}
                        onClick={() => onClickShowFilterOptions("price")}
                    >
                        <div className={" hover:border-gray-600 cursor-pointer border-b-2 border-transparent"}>Price
                        </div>
                        {!showFilter.includes("price") &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5L12 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M19 12H5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>}
                        {showFilter.includes("price") &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        }

                    </div>
                    {
                        showFilter.includes("price") &&
                        <div className={"mb-3"}>
                            <Slider value={sliderValue} setValue={handleSetValue}/>
                            <div className={"mt-3 flex justify-between items-center"}>
                                <div className={"border-1 w-1/2 h-15 relative "}>
                                    <div className={"text-xs font-semibold bg-gray-100 p-1 absolute -top-3 left-3"}>Min</div>
                                    <div className={"flex justify-center items-center h-full text-sm font-semibold"}>${sliderValue[0]}</div>
                                </div>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12H5" stroke="black" stroke-width="1" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className={"border-1 w-1/2 h-15 relative"}>
                                    <div className={"text-xs font-semibold bg-gray-100 p-1 absolute -top-3 left-3"}>Max</div>
                                    <div className={"flex justify-center items-center h-full text-sm font-semibold"}>${sliderValue[1]}</div>
                                </div>
                            </div>
                        </div>

                    }
                    <hr/>
                </div>
                <div className="filterSectionDesktop-years-section">
                    <div
                        className={"flex justify-between items-center my-3"}
                        onClick={() => onClickShowFilterOptions("years")}
                    >
                        <div className={" hover:border-gray-600 cursor-pointer border-b-2 border-transparent"}>Year
                        </div>
                        {!showFilter.includes("year") &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5L12 19" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M19 12H5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>}
                        {showFilter.includes("year") &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        }
                    </div>
                    <div>
                        {
                            showFilter.includes("year") &&
                            <form className={"flex flex-col"} action="">
                                {
                                    [2020, 2021, 2022, 2023, 2024].map((year, index) => (
                                        <label key={index} className="inline-flex items-center font-semibold p-1">
                                            <input
                                                type="checkbox"
                                                name="years"
                                                value={year}
                                                checked={selectedYear === year}
                                                onChange={(event) => onChangeApplyFilter(event, "year")}
                                                className="custom-checkbox focus:ring-black focus:ring-offset-0"
                                            />
                                            <span className="ml-2 text-gray-700">{year}</span>
                                        </label>
                                    ))
                                }
                            </form>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

const FilterSectionMobile = () => {
    return (
        <div className={"lg:hidden"}>

        </div>
    )
}

function AllVehiclesPage() {
    const dispatch = useDispatch();
    const cars = useSelector(selectDisplayedCars);
    const options = [
        {value: 'a-z', label: 'Vehicle: A-Z'},
        {value: 'high-low', label: 'Price: High to Low'},
        {value: 'low-high', label: 'Price: Low to High'},
    ];

    useEffect(() => {
        dispatch(setSortOption("a-z"))
        dispatch(resetFilters())
        dispatch(applyFilters());

    }, [dispatch]);
    // if (!cars) return <div>Loading cars...</div>;
    // if (!Array.isArray(cars)) return <div>Error loading cars</div>;
    const onChangeSort = (e) => {
        // setSelectedOption(e.value);
        dispatch(setSortOption(e.value))
        dispatch(applyFilters())
        // console.log(e.value);
        // console.log(selectedOption)
    };
    return (
        <div>
            <div className={"AllVehiclesPage-header text-center mt-9"}>
                <div className={"text-5xl font-bold"}>Vehicles</div>
                <div className={"text-l mt-4"}>Find your perfect vehicle. Narrow it down by price, mpg or whatever you
                    like.
                </div>
            </div>
            <div className={"AllVehiclesPage-content bg-gray-100 p-7 mt-10 flex justify-between"}>
                <div className={"w-1/5"}>
                    <FilterSectionDesktop/>
                    <FilterSectionMobile/>
                </div>
                <div className={"flex flex-col w-full"}>
                    <div className={"flex items-center justify-between p-3"}>
                        <div className={"text-3xl font-thin"}>{cars.length} Matches</div>
                        <div>
                            <div className="App">
                                <Select
                                    // defaultValue={selectedOption}
                                    onChange={onChangeSort}
                                    options={options}
                                    placeholder={"Vehicle: A-Z"}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            border: "none",
                                            borderBottom: state.isFocused ? '2px solid black' : '1px solid black',

                                            padding: '0.5rem',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                borderWidth: '2px',
                                                cursor: 'pointer',
                                                // gray-400
                                            },
                                            borderRadius: '0px',
                                            minWidth: '200px',
                                            backgroundColor: 'transparent', // gray-50
                                        }),
                                        singleValue: (baseStyles) => ({
                                            ...baseStyles,
                                            color: '#111827', // gray-900
                                        }),
                                        placeholder: (baseStyles) => ({
                                            ...baseStyles,
                                            color: '#6b7280', // gray-500
                                        }),
                                        menu: (baseStyles) => ({
                                            ...baseStyles,
                                        }),
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: state.isSelected
                                                ? 'black' // Selected option background
                                                : state.isFocused
                                                    ? '#f9fafb' // Hovered option background
                                                    : 'white', // Default background
                                            color: state.isSelected ? 'white' : '#111827', // Text color
                                            padding: '8px 12px',
                                            '&:active': {
                                                backgroundColor: '#e5e7eb', // Click effect
                                            },
                                        }),
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"grid lg:grid-cols-3 gap-4 sm:grid-cols-2 w-full"}>
                        {cars.map(car => (
                            car?.id ? (
                                <div key={car.id}>
                                    <VehicleCard car={car}/>
                                </div>
                            ) : null
                        ))}
                    </div>


                </div>

            </div>
        </div>
    )
}

export default AllVehiclesPage
