import React from 'react';
import Register from "../Components/Forms/Register";
import "./Loginpage.css";
import LogIn from "../Components/Forms/Login";

function Loginpage() {
    return (
        <>
        <div className={"login-container"}>
            <div className={"box"}>
                <LogIn/>
            </div>
        </div>
        </>
            );
}

export default Loginpage;