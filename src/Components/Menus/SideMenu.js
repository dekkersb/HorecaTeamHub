import React from 'react';
import "./SideMenu.css";
import { SidebarData } from "../Data/SidebarData";

function SideMenu(props) {
    return (
        <>
        <div className={"header-sidemenu"}>
            <h2>{props.name}</h2>
                <nav className={"sidemenu"}>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                        <span>{item.title}</span>
                                    {item.icon}
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