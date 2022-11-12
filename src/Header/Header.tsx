import React from "react";
import logo from "./images/logo.svg";

export const Header = () => {
    return <header className={'header'}>
        <div className={'container'}>
            <img src={logo} alt={'logo'}/>
        </div>
    </header>
}

