import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenuMenus from "../Components/Menus/Sidemenus/SideMenuMenus";
import PageHeader from "../Components/Headers/PageHeader";
import "./MenuPage.css";

function MenuPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenuMenus name={"Menu's"}/>
            <div className={"menu-root"}>
            <PageHeader name={"MENU'S PLACEHOLDER!"}/>
            </div>
        </div>
    );
}

export default MenuPage;