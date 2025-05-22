import React from 'react'


function Button({text, width, backgroundColor, hoverBackgroundColor, textColor, px, py}) {
    return (
        <div>
            <button
                className={`w-${width} bg-${backgroundColor} hover:bg-${hoverBackgroundColor} text-${textColor} rounded-4xl cursor-pointer flex items-center justify-center group transition-colors duration-300 px-${px} py-${py}`}>
                <div className="font-medium text-xs flex items-center justify-center">
    <span className="transition-transform duration-200 transform group-hover:-translate-x-1 ml-3">
      {text}
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
            stroke={`${textColor}`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
    </span>
                </div>
            </button>
        </div>
    )
}

export default Button
