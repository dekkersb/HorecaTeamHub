import React from 'react';
import "./SideMenu.css";
import {SidebarDataMenus} from "../../Data/SidebarDataMenus";
import { Link } from "react-router-dom";

function SideMenuMenus(props) {
    return (
        <>
            <div className={"header-sidemenu"}>
                <p>{props.name}</p>
                <nav className={"sidemenu"}>
                    <ul className={'nav-menu-items'}>
                        {SidebarDataMenus.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                        <span className="sidemenu-icon">{item.icon}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default SideMenuMenus;