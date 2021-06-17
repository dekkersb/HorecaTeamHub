import React from 'react';
import "./NavButton.css";

function NavButton(props) {
    return (
            <div>
            <button>{props.name}</button>
            </div>
        );
    }
export default NavButton;