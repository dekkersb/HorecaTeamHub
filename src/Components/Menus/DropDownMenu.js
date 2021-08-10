import React, { useState, useRef, useEffect} from 'react';
import "./DropDownMenu.css";
import { FaUserAlt } from "react-icons/fa";
import {useAuthContext} from "../../context/AuthContextProvider";
import {uppercaseFirstLetter} from "../../Helpers/upperCase";

function DropDownMenu() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const {user} = useAuthContext();
    const getUsername = user.email.substring(0,  user.email.indexOf("@"));
    const username = uppercaseFirstLetter(getUsername.substring(0, 1).toUpperCase(), getUsername.substring(1, getUsername.length))

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
            console.log(e);
        };

        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive]);

    return (
        <div className="menu-container">
            <button onClick={onClick} className="menu-trigger">
                <span><FaUserAlt/></span>
                <span> {username}</span>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="/mijn-gerechten">Mijn gerechten</a></li>
                    <li><a href="/mijn-uren">Mijn uren</a></li>
                    <li><a href="/login">Uitloggen</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default DropDownMenu;