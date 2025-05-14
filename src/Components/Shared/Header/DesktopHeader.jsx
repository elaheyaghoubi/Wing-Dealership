import React from "react";
import {useState, useEffect} from "react";
import {filterCars, selectCurrentFilter, selectFilteredCars} from "../../../Features/carSlice.js";
import {useDispatch, useSelector} from "react-redux";

const Vehicle = ({vehicle}) => {
    const {image, model, brand, price} = vehicle;
    return (<div
            className={"h-[220px] p-4 border border-transparent rounded-xl transition-all duration-400 ease-in-out hover:border-gray-200 hover:bg-gray-100 hover:cursor-pointer"}>
            <div className={"h-30 w-full bg-amber-200"}>
                {/*-------image------*/}
            </div>
            <div className={"mt-3 flex gap-1 items-center"}>
                <div className={"font-semibold"}>
                    {brand}
                </div>
                <div className={"text-[0.7rem] text-center"}>
                    {model}
                </div>
            </div>
            <div className={"text-[0.7rem] font-semibold"}>
                ${price}* Starting MSRP
            </div>
        </div>)
}
const VehicleContent = () => {
    const filteredCars = useSelector(selectFilteredCars);
    const filterCategory = useSelector(selectCurrentFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterCars("Electric/Hybrid"))
    }, [])

    const onClickShowCars = (category) => {
        dispatch(filterCars(category));
    }

    return (<div className={"flex justify-between p-4"}>
            <div className={"px-4"}>
                <div className={"text-[1.3rem] font-bold flex flex-col items-start justify-start"}>
                    {["Electric/Hybrid", "SUV", "Sedan", "Sports", "Truck"].map((item, index) => (<div
                            className={`hover:cursor-pointer relative transition-all duration-300 group`}
                            key={index}
                            onClick={() => onClickShowCars(item)}
                        >
                            {item}
                            <span className={`
          absolute bottom-0 left-1/2 h-px bg-current transform -translate-x-1/2 
          transition-all duration-300 
          ${filterCategory === item ? "w-full" : "w-0 group-hover:w-full"}
        `}></span>
                        </div>))}
                </div>
                <div>
                    <div className={"flex text-[0.6rem] items-center font-bold mt-1"}>
                        <div>View All Vehicles</div>
                        <div>
                            <svg className={"-rotate-90"} width="20" height="20" viewBox="0 0 50 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 21.875L25 28.125L31.25 21.875" stroke="#151515"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full grid grid-cols-3 gap-4 px-6"}>
                {filteredCars.map((item) => (<div key={item.id}>
                        <Vehicle vehicle={item}/>
                    </div>))}
            </div>
        </div>)
};
const ShoppingContent = () => (
    <div className={"flex justify-between p-7"}>
        <div className={"w-[60%]"}>
            <div className={"tracking-[0.05px] "}>
                <div className={"font-semibold text-[1.1rem] tracking-[0.05px]"}>Find Your Vehicle</div>
                <div>
                    {["Brands Certified Used Vehicles", "Accessories", "Compare Vehicles", "Buy Parts & Accessories", "Shop Online With SmartPath" , "View Brochures "].map((item, index) => (
                        <div className={"text-[0.7rem] py-1 font-normal text-gray-800 hover:underline cursor-pointer"} key={index}>
                            {item}
                        </div>))}
                </div>
            </div>
            <div className={"tracking-[0.05px] mt-6"}>
                <div className={"font-semibold text-[1.1rem]"}>Financial Tools & Services</div>
                <div>
                    {["Payment Estimator", "What Fits My Budget", "Toyota Financial Services",
                    "Southeast Toyota Finance", "Kelley Blue Book Trade-In Value"].map((item, index) => (
                        <div className={"text-[0.7rem] py-1 font-normal  text-gray-800 hover:underline cursor-pointer"} key={index}>
                            {item}
                        </div>))}
                </div>
            </div>
        </div>
        <div className={"grid grid-cols-2 gap-4 font-bold"}>
            <div className={"p-2 border border-transparent rounded-xl transition-all duration-400 ease-in-out hover:border-gray-200 hover:bg-gray-100 hover:cursor-pointer"}>
                <picture>
                    <source media="(min-width: 1920px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"/>
                    <source media="(min-width: 1440px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"/>
                    <source media="(min-width: 1024px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <source
                        data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                        srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/TAH_MY25_0015_V001-copy_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                         className="menu-image is-loaded rounded-xl"/>
                </picture>
                <div className={"flex items-start mt-2"}>
                    <div>
                        Build & Price
                    </div>
                    <svg className={"-rotate-90"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 10.5L12 13.5L15 10.5" stroke="#151515"/>
                    </svg>
                </div>
            </div>
            <div className={"p-2 border border-transparent rounded-xl transition-all duration-400 ease-in-out hover:border-gray-200 hover:bg-gray-100 hover:cursor-pointer"}>
                <picture>
                    <source media="(min-width: 1920px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"/>
                    <source media="(min-width: 1440px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"/>
                    <source media="(min-width: 1024px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <source
                        data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                        srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/finddealer_toyota_usa_operations_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                         className="menu-image is-loaded rounded-xl"/>
                </picture>
                <div className={"flex items-start mt-2"}>
                    <div>
                        Find a Dealer
                    </div>
                    <svg className={"-rotate-90"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 10.5L12 13.5L15 10.5" stroke="#151515"/>
                    </svg>
                </div>
            </div>
            <div className={"p-2 border border-transparent rounded-xl transition-all duration-400 ease-in-out hover:border-gray-200 hover:bg-gray-100 hover:cursor-pointer"}>
                <picture>
                    <source media="(min-width: 1920px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"/>
                    <source media="(min-width: 1440px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"/>
                    <source media="(min-width: 1024px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <source
                        data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                        srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/UT_TMM_FY20_0222_V001-1_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                         className="menu-image is-loaded rounded-xl"/>
                </picture>
                <div className={'flex items-start mt-2'}>
                    <div>
                        Search Inventory
                    </div>
                    <svg className={"-rotate-90"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 10.5L12 13.5L15 10.5" stroke="#151515"/>
                    </svg>
                </div>
            </div>
            <div className={"p-2 border border-transparent rounded-xl transition-all duration-400 ease-in-out hover:border-gray-200 hover:bg-gray-100 hover:cursor-pointer"}>
                <picture>
                    <source media="(min-width: 1920px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=560&amp;hei=310&amp;dpr=on,2"/>
                    <source media="(min-width: 1440px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=384&amp;hei=212&amp;dpr=on,2"/>
                    <source media="(min-width: 1024px)"
                            data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                            srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <source
                        data-srcset="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"
                        srcSet="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/global-nav/shopping-tools/vehicle_lockup_v2.png?fmt=webp&amp;qlt=90&amp;wid=288&amp;hei=159&amp;dpr=on,2"/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                         className="menu-image is-loaded rounded-xl"/>
                </picture>
                <div className={"flex items-start mt-2"}>
                   <div>
                       Special Offers
                   </div>
                    <svg className={"-rotate-90"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 10.5L12 13.5L15 10.5" stroke="#151515"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>)
const OwnersContent = () => <div>Owners Content</div>;

const DesktopHeader = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemPosition, setActiveItemPosition] = useState(null);

    const getLinePositions = () => {
        if (activeItemPosition === null) return null;

        const positions = [{right: "34%"},  // Vehicles
            {right: "21%"},  // Shopping
            {right: "8%"}    // Owners
        ];

        return positions[activeItemPosition];
    };

    const linePositions = getLinePositions();

    const handleItemClick = (item, index) => {
        setActiveItem(activeItem === item ? null : item);
        setActiveItemPosition(activeItem === item ? null : index);

    };

    return (<div className={"lg:block hidden relative"}>
        <div className=" lg:flex justify-between">
            <div className={"font-bold h-[2pc] flex items-center gap-4 m-4"}>
                <div className={""}>
                    < svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.968994" width="41.1676" height="40" fill="#EB0A1E"></rect>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M21.4181 11.1546C13.6513 11.1633 7.7132 15.0533 7.7132 20.238C7.7132 25.4286 13.5091 29.3089 21.4444 29.3089C29.3797 29.3089 35.1108 25.2522 35.1108 20.238C35.1108 15.2293 29.1724 11.1635 21.4181 11.1546ZM21.4181 11.1546L21.3925 11.1545H21.4444L21.4181 11.1546ZM29.9375 15.047C30.2357 16.1682 28.8872 17.5667 24.5694 18.0202C24.2842 15.173 23.4155 12.7667 21.9762 12.2501C23.8095 12.2913 25.625 12.6101 27.3572 13.195C28.8613 13.7367 29.7948 14.4548 29.9504 15.047H29.9375ZM21.4057 25.3027C22.443 25.3027 23.5581 23.8035 23.5581 20.1877C22.8709 20.2759 22.1577 20.2759 21.4057 20.2759C20.6536 20.2759 19.9405 20.2507 19.2403 20.1877C19.2403 23.8035 20.3684 25.3027 21.4057 25.3027ZM21.4054 18.1713H19.3697C19.7068 15.8028 20.5756 14.3917 21.4054 14.3917C22.2352 14.3917 23.091 15.765 23.4281 18.1713H21.4054ZM15.4411 13.195C13.924 13.7871 12.9904 14.4422 12.8478 15.047H12.8867C12.6015 16.1682 13.937 17.5667 18.2547 18.0202C18.527 15.173 19.3957 12.7667 20.848 12.2501C19.0062 12.2916 17.1822 12.6103 15.4411 13.195ZM9.73597 19.9106C9.72231 18.4703 10.2372 17.0723 11.1882 15.9673C11.3049 17.9957 14.1315 19.5075 18.151 20.0366V20.1878C18.151 25.076 19.4476 27.6713 20.8739 28.213C14.728 27.9988 9.73597 24.3201 9.73597 19.9106ZM24.738 20.1878C24.738 24.8744 23.4414 27.6587 21.9762 28.213H21.9892C28.1481 28.0114 33.1531 24.3201 33.1531 19.9106C33.1667 18.4703 32.6519 17.0723 31.7009 15.9673C31.5842 17.9957 28.7705 19.5075 24.738 20.0366V20.1878Z"
                                  fill="white"></path>
                        </svg>
                    </div>
                    <div>
                        Wing Dealership
                    </div>
                </div>
                <div className={"flex justify-center gap-4 items-center text-[0.8rem] "}>
                    {['Vehicles', 'Shopping', 'Owners'].map((item, index) => (<div className={"p-4 "} key={index}>
                            <div onClick={() => handleItemClick(item, index)} className="cursor-pointer font-semibold">
                                <div className="flex items-center">
                                    <span>{item}</span>
                                    <svg
                                        className={`transition-transform duration-300 ${activeItem === item ? "rotate-180" : ""}`}
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 10.5L12 13.5L15 10.5" stroke="#151515"/>
                                    </svg>
                                </div>
                            </div>
                            {activeItem === item && (<div className="absolute top-[4rem] left-0 w-full">
                                    {item === 'Vehicles' && <VehicleContent/>}
                                    {item === 'Shopping' && <ShoppingContent/>}
                                    {item === 'Owners' && <OwnersContent/>}
                                </div>)}
                        </div>))}
                    <div className={"p-4"}>
                        <svg width="30" height="30"
                             viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M36.469 20.4455C36.4774 24.4689 34.959 28.3456 32.2201 31.2934C31.5944 31.9778 30.9081 32.6044 30.1697 33.1655C27.3823 35.2902 23.9741 36.4409 20.469 36.4409C16.9638 36.4409 13.5557 35.2902 10.7682 33.1655C10.0298 32.6044 9.34358 31.9778 8.71788 31.2934C6.95003 29.3807 5.67602 27.0654 5.00651 24.5486C4.337 22.0318 4.29223 19.3897 4.87611 16.8517C5.45998 14.3137 6.65483 11.9566 8.35686 9.98514C10.0589 8.01369 12.2166 6.48751 14.6427 5.53919C17.0687 4.59086 19.6896 4.24906 22.2778 4.54347C24.866 4.83789 27.3431 5.75962 29.494 7.22859C31.6449 8.69757 33.4046 10.6694 34.6201 12.9727C35.8357 15.276 36.4703 17.8412 36.469 20.4455Z"
                                fill="white" stroke="black" stroke-width="2" stroke-miterlimit="10"></path>
                            <path
                                d="M9.34009 32.0146C10.6451 27.0889 15.1333 23.4585 20.4694 23.4585C25.8055 23.4585 30.2937 27.0889 31.5987 32.0146"
                                stroke="black" stroke-width="2"></path>
                            <circle cx="20.4651" cy="18.1439" r="5" stroke="black" stroke-width="2"></circle>
                        </svg>
                    </div>
                </div>
            </div>

            <div className={"w-full h-[1px] bg-gray-200 relative"}>
                {linePositions && (<>
                        <div
                            className={"bg-orange-600 h-[1px] w-[10%] absolute transition-all duration-300"}
                            style={{right: linePositions.right}}
                        />
                    </>)}
            </div>

        </div>);
};

export default DesktopHeader;