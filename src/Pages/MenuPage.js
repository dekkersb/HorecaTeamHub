import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";

function MenuPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Menu's"}/>
            <PageHeader name={"MENU'S PLACEHOLDER!"}/>
        </div>
    );
}

export default MenuPage;