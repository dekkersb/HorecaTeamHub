import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../assets/logo.png";
import "./PageNotFound.css";

function PageNotFound (){

    return (
        <div className="pagenotfound-container">
        <div className="pageNotFoundBox">
            <div className="login-header">
                <img className={"logo"} src={logo} alt="logo"/>
            </div>
                <div className="pagenotfounderror">
                    <label htmlFor="">Niet bevoegd om deze pagina te openen, vraag aan een leidinggevende of die het wilt uitvoeren.
                        Klik <NavLink to="/dashboard" id="registerPageIdOne" className="logInRegister">HIER</NavLink> om terug te gaan. </label>
                </div>
        </div>
        </div>
    )
}

export default PageNotFound;