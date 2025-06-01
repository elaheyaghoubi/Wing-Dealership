import React, {useEffect} from 'react'
import Carousel from "../../../Shared/Carousel.v2/Carousel.jsx";
import DropDown from "../../../Shared/DropDown/DropDown.jsx";
import {useSelector, useDispatch} from "react-redux";
import {
    applyFilters,
    selectDisplayedCars,
    setYearFilter
} from "../../../../Features/carSlice.js";


function PartCenterPage() {
    const [selectedYear, setSelectedYear] = React.useState()
    const [selectedModel, setSelectedModel] = React.useState()
    const dispatch = useDispatch();
    const models = (
        useSelector(selectDisplayedCars).map((c) => c.model)
    )

    const onChangeSaveTheYear = (e) => {
        setSelectedYear(+e.target.value)
        dispatch(setYearFilter(+e.target.value))
        dispatch(applyFilters())
        // console.log(models)
    }

    useEffect(() => {
        // console.log(models)
        console.log(selectedModel)
    }, [selectedModel]);

    const onChangeSaveTheModel = (e) => {
        setSelectedModel(e.target.value)
    }
    return (

        <div>
            <div>
                <Carousel/>
            </div>
            <div
                className={"text-center"}
            >
                <DropDown handler={onChangeSaveTheYear} range={{min: 2015, max: 2025}} />
                <DropDown handler={onChangeSaveTheModel} list={selectedYear ? models : null} />
            </div>

        </div>
    )
}

export default PartCenterPage
