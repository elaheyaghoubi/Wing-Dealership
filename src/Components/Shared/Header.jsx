import React from 'react'
import {useState} from "react";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {filterCars, selectCurrentFilter, selectFilteredCars} from '../../Features/carSlice.js';
const MobileHeader = ({showProfile, onClickShowProfile, showMenu, onClickShowMenu}) => {
    const dispatch = useDispatch();
    const filteredCars = useSelector(selectFilteredCars);
    const filterCategory = useSelector(selectCurrentFilter);
    const [showVehicles, setShowVehicles] = useState(false);
    const profileMenu = [
        {
            id: 1, name: 'My Saves', icon: (
                <svg aria-hidden="true" className="default-icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.56994 2C9.89222 2.00039 10.2108 2.06821 10.5053 2.19909C10.7998 2.32998 11.0637 2.52104 11.2799 2.76C11.7374 3.25966 11.9911 3.91255 11.9911 4.59C11.9911 5.26745 11.7374 5.92034 11.2799 6.42L6.99994 11L2.69994 6.46C2.2467 5.95825 1.99578 5.30615 1.99578 4.63C1.99578 3.95385 2.2467 3.30175 2.69994 2.8C2.9153 2.55445 3.17949 2.35648 3.47564 2.21874C3.77178 2.081 4.09339 2.0065 4.41994 2C5.99994 2 6.99994 4 6.99994 4C6.99994 4 7.99994 2 9.57994 2H9.56994ZM9.57994 0C8.63523 0.0493118 7.73111 0.399745 6.99994 1C6.26877 0.399745 5.36466 0.0493118 4.41994 0C3.82101 0.00386133 3.22951 0.133096 2.68355 0.379385C2.13758 0.625674 1.64923 0.983559 1.24994 1.43C0.448118 2.30279 0.00317383 3.4448 0.00317383 4.63C0.00317383 5.8152 0.448118 6.95721 1.24994 7.83L5.53994 12.41L6.99994 14L8.45994 12.45L12.7499 7.87C13.5703 6.99252 14.0184 5.83109 13.9999 4.63C14.0091 3.4425 13.5616 2.29689 12.7499 1.43C12.3495 0.982312 11.8596 0.623695 11.3118 0.37736C10.764 0.131026 10.1706 0.00246546 9.56994 0H9.57994Z"
                        fill="black"></path>
                </svg>)
        },
        {
            id: 2, name: 'Notifications', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="21px" height="21px">
                    <path
                        d="M 25 0 C 22.800781 0 21 1.800781 21 4 C 21 4.515625 21.101563 5.015625 21.28125 5.46875 C 15.65625 6.929688 12 11.816406 12 18 C 12 25.832031 10.078125 29.398438 8.25 31.40625 C 7.335938 32.410156 6.433594 33.019531 5.65625 33.59375 C 5.265625 33.878906 4.910156 34.164063 4.59375 34.53125 C 4.277344 34.898438 4 35.421875 4 36 C 4 37.375 4.84375 38.542969 6.03125 39.3125 C 7.21875 40.082031 8.777344 40.578125 10.65625 40.96875 C 13.09375 41.472656 16.101563 41.738281 19.40625 41.875 C 19.15625 42.539063 19 43.253906 19 44 C 19 47.300781 21.699219 50 25 50 C 28.300781 50 31 47.300781 31 44 C 31 43.25 30.847656 42.535156 30.59375 41.875 C 33.898438 41.738281 36.90625 41.472656 39.34375 40.96875 C 41.222656 40.578125 42.78125 40.082031 43.96875 39.3125 C 45.15625 38.542969 46 37.375 46 36 C 46 35.421875 45.722656 34.898438 45.40625 34.53125 C 45.089844 34.164063 44.734375 33.878906 44.34375 33.59375 C 43.566406 33.019531 42.664063 32.410156 41.75 31.40625 C 39.921875 29.398438 38 25.832031 38 18 C 38 11.820313 34.335938 6.9375 28.71875 5.46875 C 28.898438 5.015625 29 4.515625 29 4 C 29 1.800781 27.199219 0 25 0 Z M 25 2 C 26.117188 2 27 2.882813 27 4 C 27 5.117188 26.117188 6 25 6 C 23.882813 6 23 5.117188 23 4 C 23 2.882813 23.882813 2 25 2 Z M 27.34375 7.1875 C 32.675781 8.136719 36 12.257813 36 18 C 36 26.167969 38.078125 30.363281 40.25 32.75 C 41.335938 33.941406 42.433594 34.6875 43.15625 35.21875 C 43.515625 35.484375 43.785156 35.707031 43.90625 35.84375 C 44.027344 35.980469 44 35.96875 44 36 C 44 36.625 43.710938 37.082031 42.875 37.625 C 42.039063 38.167969 40.679688 38.671875 38.9375 39.03125 C 35.453125 39.753906 30.492188 40 25 40 C 19.507813 40 14.546875 39.753906 11.0625 39.03125 C 9.320313 38.671875 7.960938 38.167969 7.125 37.625 C 6.289063 37.082031 6 36.625 6 36 C 6 35.96875 5.972656 35.980469 6.09375 35.84375 C 6.214844 35.707031 6.484375 35.484375 6.84375 35.21875 C 7.566406 34.6875 8.664063 33.941406 9.75 32.75 C 11.921875 30.363281 14 26.167969 14 18 C 14 12.261719 17.328125 8.171875 22.65625 7.21875 C 23.320313 7.707031 24.121094 8 25 8 C 25.886719 8 26.679688 7.683594 27.34375 7.1875 Z M 21.5625 41.9375 C 22.683594 41.960938 23.824219 42 25 42 C 26.175781 42 27.316406 41.960938 28.4375 41.9375 C 28.792969 42.539063 29 43.25 29 44 C 29 46.222656 27.222656 48 25 48 C 22.777344 48 21 46.222656 21 44 C 21 43.242188 21.199219 42.539063 21.5625 41.9375 Z"/>
                </svg>)
        },
        {
            id: 3, name : 'Manage Payments', icon: (<></>)
        },
        {
            id: 4, name : 'Schedule Service', icon: (<></>)
        },

    ]
    const [showFilteredCars, setShowFilteredCars] = useState(false)
    const onClickShowCars = (item) => {
        dispatch(filterCars(item))
        setShowFilteredCars(true)
        console.log(showFilteredCars)
    }

    return (
        <div>
            <div className={"lg:hidden flex items-center justify-between p-6"}>
                <div className={""}>
                    < svg onClick={()=>{setShowFilteredCars(false)}} width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.968994" width="41.1676" height="40" fill="#EB0A1E"></rect>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M21.4181 11.1546C13.6513 11.1633 7.7132 15.0533 7.7132 20.238C7.7132 25.4286 13.5091 29.3089 21.4444 29.3089C29.3797 29.3089 35.1108 25.2522 35.1108 20.238C35.1108 15.2293 29.1724 11.1635 21.4181 11.1546ZM21.4181 11.1546L21.3925 11.1545H21.4444L21.4181 11.1546ZM29.9375 15.047C30.2357 16.1682 28.8872 17.5667 24.5694 18.0202C24.2842 15.173 23.4155 12.7667 21.9762 12.2501C23.8095 12.2913 25.625 12.6101 27.3572 13.195C28.8613 13.7367 29.7948 14.4548 29.9504 15.047H29.9375ZM21.4057 25.3027C22.443 25.3027 23.5581 23.8035 23.5581 20.1877C22.8709 20.2759 22.1577 20.2759 21.4057 20.2759C20.6536 20.2759 19.9405 20.2507 19.2403 20.1877C19.2403 23.8035 20.3684 25.3027 21.4057 25.3027ZM21.4054 18.1713H19.3697C19.7068 15.8028 20.5756 14.3917 21.4054 14.3917C22.2352 14.3917 23.091 15.765 23.4281 18.1713H21.4054ZM15.4411 13.195C13.924 13.7871 12.9904 14.4422 12.8478 15.047H12.8867C12.6015 16.1682 13.937 17.5667 18.2547 18.0202C18.527 15.173 19.3957 12.7667 20.848 12.2501C19.0062 12.2916 17.1822 12.6103 15.4411 13.195ZM9.73597 19.9106C9.72231 18.4703 10.2372 17.0723 11.1882 15.9673C11.3049 17.9957 14.1315 19.5075 18.151 20.0366V20.1878C18.151 25.076 19.4476 27.6713 20.8739 28.213C14.728 27.9988 9.73597 24.3201 9.73597 19.9106ZM24.738 20.1878C24.738 24.8744 23.4414 27.6587 21.9762 28.213H21.9892C28.1481 28.0114 33.1531 24.3201 33.1531 19.9106C33.1667 18.4703 32.6519 17.0723 31.7009 15.9673C31.5842 17.9957 28.7705 19.5075 24.738 20.0366V20.1878Z"
                              fill="white"></path>
                    </svg>
                </div>
                <div className={`${showProfile || showMenu ? "opacity-100 visible" : "opacity-0 invisible"} 
                transition-all duration-500 ease-in-out 
                font-bold
                   ${showFilteredCars? "hidden" : "block"} 
                    `}>
                    My Toyota
                </div>
                {showFilteredCars  && (
                    <div className={" transition-all duration-500 ease-in-out font-bold"}>
                        {filterCategory}
                    </div>
                )}
                <div className={"flex items-center justify-center gap-6"}>
                    <button onClick={onClickShowProfile} className={`${showMenu ? "hidden" : "block"}`}>
                        <svg className={`${showProfile ? "hidden" : "block"}`} width="41" height="41"
                             viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M36.469 20.4455C36.4774 24.4689 34.959 28.3456 32.2201 31.2934C31.5944 31.9778 30.9081 32.6044 30.1697 33.1655C27.3823 35.2902 23.9741 36.4409 20.469 36.4409C16.9638 36.4409 13.5557 35.2902 10.7682 33.1655C10.0298 32.6044 9.34358 31.9778 8.71788 31.2934C6.95003 29.3807 5.67602 27.0654 5.00651 24.5486C4.337 22.0318 4.29223 19.3897 4.87611 16.8517C5.45998 14.3137 6.65483 11.9566 8.35686 9.98514C10.0589 8.01369 12.2166 6.48751 14.6427 5.53919C17.0687 4.59086 19.6896 4.24906 22.2778 4.54347C24.866 4.83789 27.3431 5.75962 29.494 7.22859C31.6449 8.69757 33.4046 10.6694 34.6201 12.9727C35.8357 15.276 36.4703 17.8412 36.469 20.4455Z"
                                fill="white" stroke="black" stroke-width="2" stroke-miterlimit="10"></path>
                            <path
                                d="M9.34009 32.0146C10.6451 27.0889 15.1333 23.4585 20.4694 23.4585C25.8055 23.4585 30.2937 27.0889 31.5987 32.0146"
                                stroke="black" stroke-width="2"></path>
                            <circle cx="20.4651" cy="18.1439" r="5" stroke="black" stroke-width="2"></circle>
                        </svg>
                        <svg className={`${showProfile ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 50 50" width="41px" height="41px">
                            <path
                                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
                        </svg>
                    </button>
                    <button onClick={onClickShowMenu} className={`${showProfile ? "hidden" : "block"}`}>
                        <svg className={`${showMenu ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">
                            <path
                                d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/>
                        </svg>
                        <svg onClick={() => {setShowFilteredCars(false)}} className={`${showMenu ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 50 50" width="41px" height="41px">
                            <path
                                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <hr/>
            <div className={`h-[86.5vh] flex justify-between flex-col
              ${showProfile ? "block" : "hidden"} `}>
                <div>
                    {profileMenu.map((item) => (
                        <div className={"px-4"}>
                            <div className={"flex gap-4 py-4 items-center font-semibold"} key={item.id}>
                                <div>
                                    {item.icon}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                            </div>
                            <hr/>
                        </div>
                    ))}
                </div>
                <div className={"flex flex-col"}>
                    <button className={"bg-[#e10a1d] rounded-4xl mx-4 p-3 font-semibold"}>
                        <div className={"text-white"}>
                            Sign Up
                        </div>
                    </button>
                    <button className={"bg-white rounded-4xl m-4 p-3 border-2 font-semibold"}>
                        <div>
                            Create Account
                        </div>
                    </button>
                </div>
            </div>
            <div className={`h-[100vh] font-semibold
              ${showMenu && !showFilteredCars ? "block" : "hidden"} `}>
                <div className={"px-4"}>
                    <div
                        onClick={() => {setShowVehicles(!showVehicles)}}
                        className={"py-4 flex justify-between items-center"}
                    >
                        <div >
                            Vehicles
                        </div>
                        <div className={"font-bold text-xl"}>
                            <div className={`${showVehicles ? "block" : "hidden"}`}>
                                -
                            </div>
                            <div  className={`${showVehicles ? "hidden" : "block"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="18px" height="18px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className={`${showVehicles ? "block" : "hidden"}`}>
                        {
                            ["Electric/Hybrid", "SUV", "Sedan", "Sports", "Truck"].map((item, index) => (
                                <div
                                    className={"p-2 cursor-pointer hover:font-bold flex justify-between items-center"}
                                    key={index}
                                    onClick={() => onClickShowCars(item)}
                                >
                                    <div>
                                        {item}
                                    </div>
                                    <div>
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 15L13.5 12L10.5 9" stroke="#151515"/>
                                        </svg>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <hr/>
                </div>
                {
                    [
                        'Shopping',
                        'Owners',
                        'Build & Price',
                        'Search Inventory',
                        'Find a Dealer',
                        'Special Offers'
                    ].map((item, index) => (
                        <div className={"px-4"} key={index}>
                            <div className={"py-4"}>
                                {item}
                            </div>
                            <hr/>
                        </div>
                    ))
                }
            </div>

            <div className={`bg-white ${showFilteredCars? "block" : "hidden"}`}>
                {filteredCars.map((item) => (
                    <div key={item.id} className={"flex flex-col p-4"}>
                        <div className={"w-full flex items-center justify-center"}>
                            <div className={"w-[250px] h-[250px] bg-amber-100"}>
                            </div>
                        </div>
                      <div className={"flex flex-col items-start gap-1 my-4"}>
                          <div className={"font-bold text-xl"}>
                              {item.model}
                          </div>
                          <div className={"font-semibold"}>
                              $ {item.price}* Starting MSRP
                          </div>
                      </div>

                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    )
}

const DesktopHeader = () => (
    <div className={"lg:block hidden"}>
        Desktop
    </div>
)

function Header() {
    const [showProfile, setShowProfile] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const onClickShowProfile = () => {
        setShowProfile(!showProfile)
    }
    const onClickShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div>
            <MobileHeader showMenu={showMenu} showProfile={showProfile} onClickShowProfile={onClickShowProfile} onClickShowMenu={onClickShowMenu} />
            <DesktopHeader/>
        </div>
    )
}

export default Header
