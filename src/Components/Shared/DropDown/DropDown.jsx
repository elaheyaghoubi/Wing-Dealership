import React from 'react'

function DropDown({handler, range, list}) {
    const options = []
    // const {min, max } = range

    if (range) {
        for (let i = range.min; i <= range.max; i++) {
            options.push(
                <option
                    key={i}
                    value={i}>
                    {i}
                </option>
            )
        }
    }
    // console.log(list.length)
    if (list) {
        for(let i = 0 ; i < list.length; i++) {
            options.push(
                <option
                    key={list[i]}
                    value={list[i]}
                >
                    {list[i]}
                </option>
            )
        }
    }
    return (
        <select
            name="dropDownMenu"
            defaultValue="2015"
            id=""
            className={"p-4 border-1 rounded-sm w-1/4"}
            onChange={handler}
        >
            {range && <option value="" disabled>Year</option>}
            {options}
        </select>
    )
}

export default DropDown
