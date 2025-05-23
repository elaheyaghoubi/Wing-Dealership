import React, {useState} from 'react';

const Carousel = ({backgroundColorHandler}) => {
    const images = [
        {id: 0, url: '../../src/assets/accessories_desktop.png'},
        {id: 1, url: '../../src/assets/BZ4_MY26_0010_V001.png'},
        {id: 2, url: '../../src/assets/RPH_MY26_0003_V001.png'},
        {id: 3, url: '../../src/assets/RHV_MY26_0001_V001.png'},
    ];
    const text = [
        'All-new drive, fully charged edge.',
        'New. Bold. Nonstop fun.',
        'Crafted for serenity and style.',
        'Learn more about the expansive Toyota Accessory Portfolio.'
    ]
    const [currentImageId, setCurrentImageId] = useState(images[0]?.id);

    const nextImage = (currentId) => {
        const currentIndex = images.findIndex(img => img.id === currentId);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImageId(images[nextIndex].id);
        backgroundColorHandler()
    };

    const previousImage = (currentId) => {
        const currentIndex = images.findIndex(img => img.id === currentId);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentImageId(images[prevIndex].id);
        backgroundColorHandler()
    };

    return (
        <div className="carousel flex flex-col items-center justify-center gap-4">
            <div className="flex justify-center items-center w-full">
                {images.map((image) => (
                    <div
                        key={image?.id}
                        className={`flex justify-center flex-col items-center mt-10  ${currentImageId === image.id ? 'block' : 'hidden'}`}
                    >
                        <div className={"text-white font-bold  text-[2rem]"}>
                            {text[image.id]}
                        </div>
                        <button
                            className={` my-5 bg-white hover:bg-gray-200 text-black rounded-4xl cursor-pointer flex items-center justify-center group transition-colors duration-300 px-4 py-3`}>
                            <div className="font-semibold text-xs flex items-center justify-center">
    <span
        className={`transition-transform text-lg duration-200 transform group-hover:-translate-x-1 ml-3 font-semibold`}>
      Learn More
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
            stroke={`black`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
    </span>
                            </div>
                        </button>
                        <img
                            className="
                                w-1/2
                                shadow-xl
                                object-contain
                                rounded-sm
                                transition
                                ease-in-out
                                duration-500
                                 "
                            src={image?.url}
                            alt=""
                        />

                    </div>
                ))}
            </div>

            <div className="flex flex-row-reverse justify-center items-center gap-8">
                <button
                    onClick={() => nextImage(currentImageId)}
                    className="p-2 focus:outline-none"
                >
                    <svg
                        className="rounded-full cursor-pointer hover:bg-gray-300 transition ease-in-out duration-300 bg-white"
                        width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1"/>
                    </svg>
                </button>
                <div>
                    <div className={"flex items-center gap-3"}>
                        {
                            [0, 1, 2, 3].map((item) => (
                                <div className={"py-4 group cursor-pointer"}>
                                    <div
                                        onClick={()=>{setCurrentImageId(item)}}
                                        className={`rounded-xl h-1  transition-all  duration-500 ease-in-out  cursor-pointer group-hover:bg-white ${item === currentImageId ? 'bg-white h-2 w-30' : 'bg-gray-400 h-1 w-6'}`}
                                    >
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button
                    onClick={() => previousImage(currentImageId)}
                    className="p-2 focus:outline-none"
                >
                    <svg
                        className="rotate-180 rounded-full cursor-pointer hover:bg-gray-300 transition ease-in-out duration-300  bg-white"
                        width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515" strokeWidth="1"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;