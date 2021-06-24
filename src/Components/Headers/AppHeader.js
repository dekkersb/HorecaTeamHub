import React from 'react';
import NavButton from "../Buttons/NavButton";
import "./AppHeader.css";
import logo from "../../assets/logo.png";
import DropDownMenu from "../Menus/DropDownMenu";
import * as BiIcons from 'react-icons/bi';

function AppHeader() {
    return (
        <>
        <div className="app-header">
            <img className={"logo"} src={logo} alt="logo"/>
            <span className="dropdown-menu"><DropDownMenu/></span>   <h6>HorecaTeamHub©</h6>
        </div>

        <div className="nav-container">
            <NavButton
                name={"HOME"}
                icon={<BiIcons.BiHomeAlt/>}
            />
            <NavButton
                name={"BESTELLEN"}
                icon={<BiIcons.BiClipboard/>}
            />
            <NavButton
                name={"MENU'S"}
                icon={<BiIcons.BiBookOpen/>}
            />
            <NavButton
                name={"GERECHTEN"}
                icon={<BiIcons.BiRestaurant/>}
            />
            <NavButton
                name={"RECEPTEN"}
                icon={<BiIcons.BiFoodMenu/>}
            />
            <NavButton
                name={"HACCP"}
                icon={<BiIcons.BiLock/>}
                disabled={true}
            />
        </div>
        </>
    );
}

export default AppHeader;