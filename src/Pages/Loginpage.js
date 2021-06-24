import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import Register from "../Components/Forms/Register";
import "./Loginpage.css";

function Loginpage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Login"}/>
            <div className={"register-container"}>
            <Register/>
            </div>
        </div>
    );
}

export default Loginpage;