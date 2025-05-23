const Carousel = ({ slides, currentSlideIndex, onSlideChange }) => {
    const nextSlide = () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        onSlideChange(nextIndex);
    };

    const previousSlide = () => {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        onSlideChange(prevIndex);
    };

    return (
        <div className="carousel flex flex-col items-center justify-center gap-4">
            <div className="flex justify-center items-center w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`flex justify-center ${currentSlideIndex === index ? 'block' : 'hidden'}`}
                    >
                        <img
                            className="w-1/2 shadow-xl object-contain rounded-sm transition ease-in-out duration-500"
                            src={slide.imageUrl}
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-row-reverse justify-center items-center gap-8">
                <button
                    onClick={nextSlide}
                    className="p-2 focus:outline-none"
                >
                    <svg
                        className="rounded-full  w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] cursor-pointer hover:bg-gray-300 transition ease-in-out duration-300 bg-white"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1"/>
                    </svg>
                </button>

                <div className="flex items-center gap-3">
                    {slides.map((_, index) => (
                        <div key={index} className="py-4 group cursor-pointer">
                            <div
                                onClick={() => onSlideChange(index)}
                                className={`rounded-xl h-1 transition-all duration-500 ease-in-out cursor-pointer group-hover:bg-white ${index === currentSlideIndex ? 'bg-white h-2 lg:w-30 w-10 ' : 'bg-gray-400 h-1 lg:w-6 w-3   '}`}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={previousSlide}
                    className="p-2 focus:outline-none"
                >
                    <svg
                        className="rotate-180 w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-full cursor-pointer hover:bg-gray-300 transition ease-in-out duration-300 bg-white"
                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel