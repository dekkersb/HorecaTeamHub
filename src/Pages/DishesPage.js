import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";

function DishesPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Gerechten"}/>
            <PageHeader name={"GERECHTEN PLACEHOLDER!"}/>
        </div>
    );
}

export default DishesPage;