import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";
import "./MenuPage.css";

function MenuPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Menu's"}/>
            <div className={"menu-root"}>
            <PageHeader name={"MENU'S PLACEHOLDER!"}/>
            </div>
        </div>
    );
}

export default MenuPage;