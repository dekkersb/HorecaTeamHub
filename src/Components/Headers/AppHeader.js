import React from 'react';
import NavButton from "../Buttons/NavButton";
import "./AppHeader.css";
import logo from "../../assets/logo.png";
import DropDownMenu from "../Menus/DropDownMenu";


function AppHeader() {
    return (
        <>
        <div className="app-header">
            <img className={"logo"} src={logo} alt="logo"/>
            <span className="dropdown-menu"><DropDownMenu/></span>   <h6>HorecaTeamHub©</h6>
        </div>

        <div className="nav-container">
            <NavButton name={"HOME"}/>
            <NavButton name={"BESTELLEN"}/>
            <NavButton name={"MENU'S"}/>
            <NavButton name={"GERECHTEN"}/>
            <NavButton name={"RECEPTEN"}/>
            <NavButton name={"HACCP"}/>
        </div>
        </>
    );
}

export default AppHeader;