import React from "react"
import { APP_Logo } from "../../utils/constants"
export const Header = () => {
    return (<>
        <div className="header-wrapper">
            <div className="logo">
                <img src={APP_Logo} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    </>)
}