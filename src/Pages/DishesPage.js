import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";
import "./DishesPage.css";

function DishesPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Gerechten"}/>
            <div className={"dishes-root"}>
            <PageHeader name={"GERECHTEN PLACEHOLDER!"}/>
            </div>
        </div>
    );
}

export default DishesPage;