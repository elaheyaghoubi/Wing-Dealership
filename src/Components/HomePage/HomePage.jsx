import React, {useEffect} from 'react'
import {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCars, filterCars, selectFilteredCars} from "../../Features/carSlice.js";
import CarCard from "./CarCard.jsx";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(timer);
    }, [])

    return (
        <div>
            <div>
                {currentSlide === 0 &&
                    <img src="../src/assets/2015-Mazda-RX-Vision-concept-front-three-quarter.jpg" alt=""/>}
                {currentSlide === 1 &&
                    <img src="../src/assets/2009-BMW-Vision-EfficientDynamics-concept.jpg" alt=""/>}
                {currentSlide === 2 &&
                    <img src="../src/assets/1617206844894.jpeg" alt=""/>}
            </div>
            <div className="flex gap-[1px]">
                {[0, 1, 2].map((index) => (
                    <div
                        key={index}
                        className="relative h-[7px] w-1/3 bg-[#9a9a99] overflow-hidden"
                    >
                        <div
                            className={`absolute top-0 left-0 h-full  ${
                                currentSlide === index
                                    ? 'w-full transition-[width] duration-[3000ms] ease-linear bg-black'
                                    : 'w-0 transition-none'
                            }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Explore = () => {
    const dispatch = useDispatch();
    const filteredCars = useSelector(selectFilteredCars);
    const [currentItem, setCurrentItem] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const onClickChangeCategory = (index) => {
        setCurrentItem(index);
        const vehicleTypes = ["Electric/Hybrid", "SUV", "Sedan", "Sports", "Truck"];
        dispatch(filterCars(vehicleTypes[index]));
        setCurrentIndex(0);
    };

    const totalPages = filteredCars.length

    const currentPage = isMobile
        ? currentIndex + 1
        : Math.min(currentIndex + 2, totalPages);

    const scrollToCards = (direction) => {
        const container = carouselRef.current;
        const cardElement = container?.querySelector('.car-card');
        const cardWidth = cardElement?.offsetWidth || 300;
        const cardsToScroll = isMobile ? 1 : 2;

        if (direction === 'next') {
            const newIndex = Math.min(
                currentIndex + cardsToScroll,
                filteredCars.length - 1
            );
            setCurrentIndex(newIndex);
            container.scrollTo({
                left: newIndex * cardWidth,
                behavior: 'smooth'
            });
        } else {
            const newIndex = Math.max(
                currentIndex - cardsToScroll,
                0
            );
            setCurrentIndex(newIndex);
            container.scrollTo({
                left: newIndex * cardWidth,
                behavior: 'smooth'
            });
        }
    };
    useEffect(() => {
        dispatch(filterCars("SUV"));
    }, []);

    return (
        <div className="HomePage-explore mt-8">
            <div className="font-semibold text-[1.5rem] text-center">Explore All Vehicles</div>
            <div>
                <div className="flex text-[0.8rem] font-semibold text-center items-center justify-center mt-3">
                    {["Electric/Hybrid", "SUV", "Sedan", "Sports", "Truck"].map((item, index) => (
                        <div
                            className={`border-b-[2px] p-2 transition-colors duration-300 ${
                                currentItem === index ? "border-b-black" : "border-b-gray-400"
                            }`}
                            key={index}
                        >
                            <div
                                onClick={() => onClickChangeCategory(index)}
                                className="cursor-pointer"
                            >
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    ref={carouselRef}
                    className="flex flex-nowrap overflow-x-auto text-white scroll-smooth snap-x snap-mandatory"
                    style={{scrollbarWidth: 'none'}}
                >
                    {filteredCars.map((car, index) => (
                        <div key={index} className="flex-shrink-0 snap-start car-card">
                            <CarCard car={car} index={index}/>
                        </div>
                    ))}
                </div>
                <div className="buttons flex justify-center items-center mt-4">
                    <button
                        className="cursor-pointer"
                        onClick={() => scrollToCards('prev')}
                        disabled={currentIndex === 0}
                    >
                        <div
                            className={`rounded-full hover:bg-gray-400 ${currentIndex === 0 ? 'bg-gray-400' : 'bg-black'}`}>
                            <svg className="-rotate-180" width="30" height="30" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 15L13.5 12L10.5 9" stroke="white"/>
                            </svg>
                        </div>
                    </button>

                    <div className="flex gap-4 text-center items-center justify-center mx-4">
                        <div>{currentPage}</div>
                        <div>Of</div>
                        <div>{totalPages}</div>
                    </div>

                    <button
                        className="cursor-pointer "
                        onClick={() => scrollToCards('next')}
                        disabled={currentIndex >= filteredCars.length - (isMobile ? 1 : 2)}
                    >
                        <div
                            className={`rounded-full hover:bg-gray-400 ${currentIndex >= filteredCars.length - (isMobile ? 1 : 2) ? 'bg-gray-400' : 'bg-black'}`}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 15L13.5 12L10.5 9" stroke="white"/>
                            </svg>
                        </div>
                    </button>
                </div>
                <div className={"flex items-center gap-1 justify-center mt-8"}>
                    <button className="rounded-4xl border-2 p-3 px-2 flex items-center justify-center group  transition-colors duration-200 w-full max-w-xs ">
                        <div className="font-semibold text-sm cursor-pointer flex items-center justify-center transform group-hover:-translate-x-2 transition-transform duration-200">
                            Explore All Vehicles
                        </div>
                        <div className="w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-200 overflow-hidden">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </button>
                    <button className="relative rounded-4xl  p-3 px-2 flex items-center justify-center group hover:text-gray-500 transition-all duration-200 w-full max-w-xs ">
                        <div className="font-semibold text-sm cursor-pointer flex items-center justify-center gap-2">
                            <div className="group-hover:-translate-x-2 transition-transform duration-200 ">
                                Search Inventory
                            </div>
                            <div className="transition-all duration-200 ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};


function HomePage() {
    return (
        <div className={"HomePage-container"}>
            <Slider/>
            <Explore/>
        </div>
    )
}

export default HomePage
