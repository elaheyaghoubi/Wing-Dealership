import React from 'react'
import {useState, useEffect} from "react";

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
            <div className={"flex gap-[1px]"}>
                <div className={`bg-[#9a9a99] h-[7px] w-1/3 ${currentSlide === 0 ? 'bg-black' : ''}`}></div>
                <div className={`bg-[#9a9a99] h-[7px] w-1/3 ${currentSlide === 1 ? 'bg-black' : ''}`}></div>
                <div className={`bg-[#9a9a99] h-[7px] w-1/3 ${currentSlide === 2 ? 'bg-black' : ''}`}></div>
            </div>
        </div>
    )
}

function HomePage() {
    return (
        <div>
            <Slider/>
        </div>
    )
}

export default HomePage
