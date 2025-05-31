import React from 'react'

function Carousel() {
    const data = [
        {
            id: 0,
            header: "Free Ground Shipping",
            button: 'Learn More',
            image: '../../src/assets/image (1).jpeg'
        },
        {
            id: 1,
            header: "Toyota Rewards Visa Signature® Credit Card",
            button: 'Learn More',
            image: '../../src/assets/image.jpeg'
        },
        {
            id: 2,
            header: "Elevate your summer travels",
            button: 'Shop Now',
            image: '../../src/assets/image (2).jpeg'
        }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
            setFade(true);
        }, 300);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
            setFade(true);
        }, 300);
    };

    return (
        <div className="flex justify-center">
            <div className="relative w-2/3">
                <div className="w-full relative">
                    <img
                        src={data[currentIndex].image}
                        alt=""
                        className={`w-full rounded-sm shadow-xl h-auto object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div className={"absolute top-0 h-full flex flex-col justify-center gap-6 left-1/6 z-10 w-1/4"}>
                        <div
                            className={"text-white font-bold text-6xl"}
                        >
                            {data[currentIndex].header}
                        </div>
                        <button
                            className={`bg-red-500 lg:w-fit w-full hover:bg-red-800 text-white rounded-4xl cursor-pointer flex items-center justify-center group transition-colors duration-300 px-3 py-3`}>
                            <div className="font-medium text-xs flex items-center justify-center">
    <span className={`transition-transform  duration-200 transform group-hover:-translate-x-1 ml-3 font-semibold`}>
      {data[currentIndex].button}
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
            stroke={`white`}
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
                <div className="flex top-1/2 w-full flex-row-reverse justify-between absolute">
                    <button
                        onClick={handleNext}
                        className="cursor-pointer bg-[hsla(0,0%,100%,.5)] hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-full mr-3 shadow-md hover:scale-105"
                    >
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515"/>
                        </svg>
                    </button>
                    <button
                        onClick={handlePrev}
                        className="cursor-pointer bg-[hsla(0,0%,100%,.5)] hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-full ml-3 shadow-md hover:scale-105"
                    >
                        <svg className="rotate-180" width="60" height="60" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515"/>
                        </svg>
                    </button>
                </div>
                <div className={"flex items-center justify-center"}>
                    <div className={"flex gap-2 items-center justify-center absolute bottom-2 p-2 rounded-4xl font-semibold bg-white z-20"}>
                        <div>{currentIndex + 1}</div>
                        <div>Of</div>
                        <div>{data.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
