import React from 'react';
import Register from "../Components/Forms/Register";
import "./Registerpage.css";


function Registerpage() {
    return (
        <div className={"register-container"}>
            <div className={"register-box"}>
            <Register/>
            </div>
        </div>
    );
};

export default Registerpage;