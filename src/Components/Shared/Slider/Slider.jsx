import React from 'react'
import {useState} from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './Slider.css'
function Slider({value, setValue}) {

    return (
        <div>
            <RangeSlider
                min={20000}
                max={180000}
                value={value}
                onInput={setValue}
                step={500}
                rangeSlideDisabled={true}
            />

        </div>
    );
}

export default Slider
