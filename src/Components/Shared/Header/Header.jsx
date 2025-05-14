import React from 'react'
import MobileHeader from "./MobileHeader.jsx";
import DesktopHeader from "./DesktopHeader.jsx";

function Header() {

    return (
        <div>
            <MobileHeader/>
            <DesktopHeader/>
        </div>
    )
}

export default Header
