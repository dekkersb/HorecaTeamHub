import React from 'react';
import "./NavButton.css";

function NavButton(props) {
    return (
            <div className="nav-button">
            <button>{props.name}</button>
            </div>
        );
    }
export default NavButton;