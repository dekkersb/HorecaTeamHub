import React from 'react';
import NavButton from "../Buttons/NavButton";
import "./AppHeader.css";


function AppHeader() {
    return (
        <div className="nav-container">
            <NavButton name={"HOME"}/>
            <NavButton name={"BESTELLEN"}/>
            <NavButton name={"MENU'S"}/>
            <NavButton name={"GERECHTEN"}/>
            <NavButton name={"RECEPTEN"}/>
            <NavButton name={"HACCP"}/>
        </div>
    );
}

export default AppHeader;