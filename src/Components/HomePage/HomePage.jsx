import React, {useEffect} from 'react'
import {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    applyFilters,
    selectDisplayedCars, setPriceFilter, setCategoryFilter, setSortOption, resetFilters
} from "../../Features/carSlice.js";
import CarCard from "./CarCard.jsx";
import {Link} from "react-router-dom";
import Carousel from "../Shared/Carousel/Carousel.jsx";

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
    const filteredCars = useSelector(selectDisplayedCars);
    const [currentItem, setCurrentItem] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        dispatch(resetFilters())
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
        // dispatch(filterCars(vehicleTypes[index]));
        dispatch(setSortOption("a-z"))
        dispatch(setCategoryFilter(vehicleTypes[index]))
        dispatch(applyFilters());

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
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        dispatch(setSortOption("a-z"))
        dispatch(setCategoryFilter("SUV"))
        dispatch(applyFilters());

    }, [dispatch]);

    return (
        <div
            ref={containerRef}
            className="HomePage-explore mt-8"
        >
            <div className="font-semibold text-[1.5rem] text-center">Explore All Vehicles</div>
            <div>
                <div className="flex text-[0.8rem]  text-center items-center justify-center mt-3">
                    {["Electric/Hybrid", "SUV", "Sedan", "Sports", "Truck"].map((item, index) => (
                        <div
                            className={`border-b-[2px] p-2 transition-colors duration-300 ${
                                currentItem === index ? "border-b-black font-semibold" : "border-b-gray-400"
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
                <div className={"flex lg:flex-row flex-col  items-center gap-1 justify-center mt-8"}>
                    <button
                        className="rounded-4xl border-2 w-1/2  p-3 px-2 flex items-center justify-center group  transition-colors duration-400 lg:w-full max-w-xs ">
                        <Link to={"/all-vehicles"}
                              className="flex items-center justify-center w-full text-inherit no-underline"
                        >
                            <div
                                className="font-semibold text-sm cursor-pointer flex items-center justify-center transform group-hover:-translate-x-2 transition-transform duration-200">
                                Explore All Vehicles
                            </div>
                            <div
                                className="w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-400 overflow-hidden">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </Link>
                    </button>
                    <button
                        className="relative rounded-4xl w-1/2  p-3 px-2 flex items-center justify-center group hover:text-gray-500 transition-all duration-200 lg:w-full max-w-xs ">
                        <div className="font-semibold text-sm cursor-pointer flex items-center justify-center gap-2">
                            <div className="group-hover:-translate-x-2 transition-transform duration-200 ">
                                Search Inventory
                            </div>
                            <div className="transition-all duration-200 ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};
const Tools = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="homePage-tools-container flex flex-col justify-center items-center mt-15 w-full opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
            <div className="homePage-tools-header text-center text-[1.5rem] font-semibold">
                Shopping Tools
            </div>
            <div
                className="homePage-tools-content font-bold rounded-lg mt-5 bg-gray-100 p-6 lg:gap-0 gap-6 lg:px-20 lg:w-[70%] grid place-items-center grid-cols-2 items-center lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-around flex-1">
                    <div className="flex flex-col-reverse items-center justify-between">
                        <div
                            className="hover:border-black transition ease-in-out duration-500 cursor-pointer border-b-2 border-transparent">
                            Build & Price
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
                            <rect width="32" height="32" fill="none"/>
                            <line x1="14" y1="22" x2="14" y2="29" fill="none" stroke="#000" strokeMiterlimit="10"
                                  strokeWidth="2"/>
                            <line x1="18" y1="22" x2="18" y2="29" fill="none" stroke="#000" strokeMiterlimit="10"
                                  strokeWidth="2"/>
                            <rect x="14" y="3" width="4" height="4" fill="#eb0a1e"/>
                            <path
                                d="M21,21a7,7,0,1,1-8.45-11,1,1,0,0,1,1.5.87V17h4V10.81a1,1,0,0,1,1.5-.87A7,7,0,0,1,21,21Z"
                                fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="w-[1px] lg:self-stretch bg-gray-400"></div>
                </div>
                <div className="flex items-center justify-around flex-1">
                    <div className="flex flex-col-reverse items-center justify-between">
                        <div
                            className="hover:border-black transition ease-in-out duration-500 cursor-pointer border-b-2 border-transparent">
                            Search Inventory
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
                            <rect width="32" height="32" fill="none"/>
                            <path d="M17,8a6,6,0,1,1-6,6,6,6,0,0,1,6-6m0-2a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z"/>
                            <line x1="3" y1="27" x2="12" y2="18.64" fill="none" stroke="#000" strokeMiterlimit="10"
                                  strokeWidth="2"/>
                            <rect x="28" y="13" width="2" height="2"/>
                            <rect x="4" y="13" width="2" height="2"/>
                            <rect x="15" y="12" width="4" height="4" fill="#eb0a1e"/>
                        </svg>
                    </div>
                    <div className="w-[1px] lg:self-stretch bg-gray-400"></div>
                </div>
                <div className="flex items-center justify-around flex-1">
                    <div className="flex flex-col-reverse items-center justify-between">
                        <div
                            className="hover:border-black transition ease-in-out duration-500 cursor-pointer border-b-2 border-transparent">
                            Special Offers
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
                            <rect width="32" height="32" fill="none"/>
                            <rect x="3" y="13" width="20" height="12" fill="none" stroke="#000" strokeMiterlimit="10"
                                  strokeWidth="2"/>
                            <rect x="11" y="17" width="4" height="4" fill="#eb0a1e"/>
                            <path d="M6.82,13A2.77,2.77,0,0,1,7,14a3,3,0,0,1-3,3,2.77,2.77,0,0,1-1-.18" fill="none"
                                  stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                            <path d="M6.82,25A2.77,2.77,0,0,0,7,24a3,3,0,0,0-3-3,2.77,2.77,0,0,0-1,.18" fill="none"
                                  stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                            <path d="M19.18,13A2.77,2.77,0,0,0,19,14a3,3,0,0,0,3,3,2.77,2.77,0,0,0,1-.18" fill="none"
                                  stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                            <path d="M19.18,25A2.77,2.77,0,0,1,19,24a3,3,0,0,1,3-3,2.77,2.77,0,0,1,1,.18" fill="none"
                                  stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                            <polyline points="7 13 7 7 29 7 29 19 23 19" fill="none" stroke="#000"
                                      strokeMiterlimit="10"
                                      strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="w-[1px] lg:self-stretch bg-gray-400"></div>
                </div>
                <div className="flex items-center justify-around flex-1">
                    <div className="flex flex-col-reverse items-center justify-between">
                        <div
                            className="hover:border-black transition ease-in-out duration-500 cursor-pointer border-b-2 border-transparent">
                            Find a Dealer
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32">
                            <rect width="32" height="32" fill="none"/>
                            <path
                                d="M10.69,17.05c-1.52-1.82-2.17-2.91-2.19-4.91a7,7,0,0,1,2.22-5.09,7.84,7.84,0,0,1,10.57,0,7,7,0,0,1,2.21,5.09c0,2-.67,3.09-2.23,4.95L16,23Z"
                                fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                            <rect x="14" y="10" width="4" height="4" fill="#eb0a1e"/>
                            <polyline points="14 21 10 21 5 28 27 28 22 21 18 21" fill="none" stroke="#000"
                                      strokeMiterlimit="10" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
const BeyondZero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="mt-10 relative opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
            <div>
                <img src="../src/assets/BZ_5120_2489_v2_desktop_p0otu5rLxmyrwsBnkbfNnHP4DcA9GLL.png" alt=""/>
            </div>
            <div className={"absolute text-white z-10 top-1/5 text-center w-full"}>
                <div className={"font-thin text-3xl tracking-widest"}>BEYOND ZERO</div>
                <div className={"font-semibold text-3xl"}>Drive change your way.</div>
                <div className={"w-full text-center flex justify-center mt-5 font-bold"}>
                    <button
                        className={`bg-white hover:bg-gray-200 text-black rounded-4xl cursor-pointer flex items-center justify-center group transition-colors duration-300 px-3 py-3`}>
                        <div className="font-medium text-xs flex items-center justify-center">
    <span className={`transition-transform  duration-200 transform group-hover:-translate-x-1 ml-3 font-semibold`}>
      Explore Beyond Zero
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
                </div>
            </div>
        </div>
    )
}
const Gallery = () => {
    const colors = [
        '#3c2c2a', '#394344', '#2b5b59', '#a6afaf', '#5d4e41', '#2b5b59', '#43512f', '#676770', '#25363b'
    ];

    const slides = [
        {
            id: 0,
            imageUrl: '../../src/assets/accessories_desktop.png',
            text: 'All-new drive, fully charged edge.',
            buttonText: 'Learn More'
        },
        {
            id: 1,
            imageUrl: '../../src/assets/BZ4_MY26_0010_V001.png',
            text: 'New. Bold. Nonstop fun.',
            buttonText: 'Learn More'
        },
        {
            id: 2,
            imageUrl: '../../src/assets/RPH_MY26_0003_V001.png',
            text: 'Crafted for serenity and style.',
            buttonText: 'Learn More'
        },
        {
            id: 3,
            imageUrl: '../../src/assets/RHV_MY26_0001_V001.png',
            text: 'Learn more about the expansive Toyota Accessory Portfolio.',
            buttonText: 'Learn More'
        }
    ];

    const [backgroundColor, setBackgroundColor] = useState(colors[0]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (newIndex) => {
        setCurrentSlideIndex(newIndex);
        setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
    };

    const currentSlide = slides[currentSlideIndex];

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);


    return (
        <div ref={containerRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div style={{backgroundColor}} className="p-10 transition ease-in-out duration-500">
                <div className="flex justify-center flex-col items-center mt-10">
                    <div className="text-white font-bold text-[2rem] transition ease-in-out duration-500">
                        {currentSlide.text}
                    </div>
                    <button
                        className="my-5 bg-white hover:bg-gray-200 text-black rounded-4xl cursor-pointer flex items-center justify-center group transition-colors duration-300 px-4 py-3">
                        <div className="font-semibold text-xs flex items-center justify-center">
                            <span
                                className="transition-transform text-lg duration-200 transform group-hover:-translate-x-1 ml-3 font-semibold">
                                {currentSlide.buttonText}
                            </span>
                            <span
                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.5 15L13.5 12L10.5 9"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                    </button>
                </div>

                <Carousel
                    slides={slides}
                    currentSlideIndex={currentSlideIndex}
                    onSlideChange={handleSlideChange}
                />
            </div>
        </div>
    );
};
const Discover = () => {
    const [currentItem, setCurrentItem] = useState(1);
    const data = [
        {
            id: 0,
            header: {
                text: 'FEATURED STORIES',
                content: 'Schedule Toyota Service'
            },
            content: 'Sign-in and schedule a service appointment online at one of our dealers.',
            button: 'Schedule Now'
        },
        {
            id: 1,
            header: {
                text: 'FEATURED STORIES',
                content: 'Toyota Brand'
            },
            content: 'Inspired by what’s possible.',
            button: 'Learn More'
        },
        {
            id: 2,
            header: {
                text: 'OFFERS & SERVICES',
                content: 'Let’s talk finances',
            },
            content: 'We have options for flexible financing and leasing, rebates, protection plans, insurance offerings and so much more.',
            button: 'Learn More'
        }
    ]
    const colors = [
        '#3c2c2a', '#394344', '#2b5b59'
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);


    return (
        <div
            className={"homePage-discoverSection-container flex flex-col  items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"}
            ref={containerRef}
        >
            <div className="homePage-discoverSection-header font-semibold text-[1.5rem] text-center mt-10">
                Discover Vehicle
            </div>
            <div className={"flex justify-center w-full"}>
                <div className={"flex justify-center items-center w-1/2"}>
                    {
                        ["Featured Stories", " Vehicles & Technology", " Offers & Services"].map((item, i) => (
                            <div
                                className={`cursor-pointer p-3 border-b-2 transition ease-in-out duration-300 ${currentItem !== i ? 'border-b-gray-400' : 'border-b-black font-semibold'}`}
                                key={i}
                                onClick={() => setCurrentItem(i)}
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div
                className="homePage-discoverSection-content text-white w-3/4 h-100 flex rounded-xl mt-5 transition ease-in-out duration-700"
                style={{
                    backgroundColor: colors[currentItem]
                }}
            >
                <div className={"w-1/2"}>
                    {/*image*/}
                </div>
                <div className={"w-1/2 p-10 flex flex-col items-stretch justify-center"}>
                    <div className={"mb-2"}>{data[currentItem].header.text}</div>
                    <div className={"text-[2rem] font-semibold"}>{data[currentItem].header.content}</div>
                    <div className={"text-[1.2rem] mt-4"}>{data[currentItem].content}</div>
                </div>
            </div>
        </div>
    )
}

function HomePage() {
    return (
        <div className={"HomePage-container"}>
            <Slider/>
            <Explore/>
            <Tools/>
            <BeyondZero/>
            <Gallery/>
            <Discover/>
        </div>
    )
}

export default HomePage
