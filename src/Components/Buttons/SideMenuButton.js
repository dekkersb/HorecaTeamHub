import React from 'react';
import "./SideMenuButton.css";

function SideMenuButton(props) {
    return (
        <div className="sidemenu-button">
            <button>{props.name}</button>
        </div>
    );
}

export default SideMenuButton;