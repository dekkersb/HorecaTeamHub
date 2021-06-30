import React from 'react';
import "./Loginpage.css";
import LogIn from "../Components/Forms/Login";

function Loginpage() {
    return (
        <div className={"login-container"}>
            <div className={"login-box"}>
                <LogIn/>
            </div>
        </div>
    );
};

export default Loginpage;