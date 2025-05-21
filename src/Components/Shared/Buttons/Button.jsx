import React from 'react'
import {Link} from "react-router-dom";

function Button({text, width}) {
    return (
        <div>
            <button
                className={`w-${width} bg-white hover:bg-gray-200 text-black rounded-2xl cursor-pointer flex items-center justify-center group transition-colors duration-300 px-3 py-1.5`}>
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
            stroke="#151515"
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
