import React from 'react';
import "./SideMenu.css";

function SideMenu(props) {
    return (
        <div className={"sidemenu"}>
            <h2>{props.name}</h2>
                <span className={"header-sidemenu"}>
                </span>
        </div>
    );
}

export default SideMenu;