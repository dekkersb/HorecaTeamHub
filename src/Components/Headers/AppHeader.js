import React from 'react';
import NavButton from "../Buttons/NavButton";
import "./AppHeader.css";
import logo from "../../assets/logo.png";
import DropDownMenu from "../Menus/DropDownMenu";
import * as BiIcons from 'react-icons/bi';
import { NavLink } from "react-router-dom";

function AppHeader() {
    return (
        <>
        <div className="app-header">
            <img className={"logo"} src={logo} alt="logo"/>
            <span className="dropdown-menu"><DropDownMenu/></span>   <h6>HorecaTeamHub©</h6>
        </div>

        <div className="nav-container">
            <NavLink to="/dashboard"
            activeClassName="active-nav-button">
            <NavButton className="nav-button"
                name={"HOME"}
                icon={<BiIcons.BiHomeAlt/>}
            />
            </NavLink>
            <NavLink to="/bestellen"
                     activeClassName="active-nav-button">
                <NavButton
                    name={"BESTELLEN"}
                    icon={<BiIcons.BiClipboard/>}
                />
            </NavLink>
            <NavLink to="/menus"
                     activeClassName="active-nav-button">
                <NavButton
                    name={"MENU'S"}
                    icon={<BiIcons.BiBookOpen/>}
                />
            </NavLink>
            <NavLink to="/gerechten"
                     activeClassName="active-nav-button">
            <NavButton
                name={"GERECHTEN"}
                icon={<BiIcons.BiRestaurant/>}
            />
            </NavLink>
            <NavLink to="/recepten"
                     activeClassName="active-nav-button">
            <NavButton
                name={"RECEPTEN"}
                icon={<BiIcons.BiFoodMenu/>}
            />
            </NavLink>
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