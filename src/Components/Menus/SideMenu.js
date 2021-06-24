import React from 'react';
import "./SideMenu.css";
import { SidebarData } from "../Data/SidebarData";
import { Link } from "react-router-dom";

function SideMenu(props) {
    return (
        <>
        <div className={"header-sidemenu"}>
            <p>{props.name}</p>
                <nav className={"sidemenu"}>
                    <ul className={'nav-menu-items'}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    {item.icon}
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

export default SideMenu;