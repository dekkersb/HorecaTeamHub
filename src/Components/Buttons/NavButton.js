import React from 'react';
import "./NavButton.css";

function NavButton(props) {
    return (
            <div className="nav-button">
            <button>{props.name}  {props.icon}</button>
            </div>
        );
    }
export default NavButton;