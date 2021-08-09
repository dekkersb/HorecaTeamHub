import React from 'react';
import "./SideMenu.css";
import {SidebarDataOrder} from "../../Data/SideBarDataOrder";
import { Link } from "react-router-dom";

function SideMenuOrder(props) {
    return (
        <>
        <div className={"header-sidemenu"}>
            <p>{props.name}</p>
                <nav className={"sidemenu"}>
                    <ul className={'nav-menu-items'}>
                        {SidebarDataOrder.map((item, index) => {
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

export default SideMenuOrder;