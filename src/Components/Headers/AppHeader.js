import React from 'react';
import NavButton from "../Buttons/NavButton";
import "./AppHeader.css";
import logo from "../../assets/logo.png";
import DropDownMenu from "../Menus/DropDownMenu";
import * as BiIcons from 'react-icons/bi';
import { Link } from "react-router-dom";

function AppHeader() {
    return (
        <>
        <div className="app-header">
            <img className={"logo"} src={logo} alt="logo"/>
            <span className="dropdown-menu"><DropDownMenu/></span>   <h6>HorecaTeamHub©</h6>
        </div>

        <div className="nav-container">
            <Link to="/dashboard">
            <NavButton
                name={"HOME"}
                icon={<BiIcons.BiHomeAlt/>}
            />
            </Link>
            <Link to="/bestellen">
                <NavButton
                    name={"BESTELLEN"}
                    icon={<BiIcons.BiClipboard/>}
                />
            </Link>
            <Link to="/menus">
                <NavButton
                    name={"MENU'S"}
                    icon={<BiIcons.BiBookOpen/>}
                />
            </Link>
            <Link to="/gerechten">
            <NavButton
                name={"GERECHTEN"}
                icon={<BiIcons.BiRestaurant/>}
            />
            </Link>
            <Link to="/recepten">
            <NavButton
                name={"RECEPTEN"}
                icon={<BiIcons.BiFoodMenu/>}
            />
            </Link>
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