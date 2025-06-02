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
                className={"text-center p-7"}
            >
                <div>
                    <div className={"font-semibold text-xl"}>
                        Parts Center Online
                    </div>
                    <div className={"font-bold text-6xl"}>
                        Select Your Vehicle
                    </div>
                </div>
                <div className={"m-7"}>
                    <DropDown handler={onChangeSaveTheYear} range={{min: 2015, max: 2025}}/>
                    <DropDown handler={onChangeSaveTheModel} list={selectedYear ? models : null}/>
                </div>
                <div className={"h-[1px] w-1/2 m-auto bg-gray-300"}></div>
            </div>

        </div>
    )
}

export default PartCenterPage
