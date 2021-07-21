import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenuDishes from "../Components/Menus/Sidemenus/SideMenuDishes";
import PageHeader from "../Components/Headers/PageHeader";
import "./DishesPage.css";

function DishesPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenuDishes name={"Gerechten"}/>
            <div className={"dishes-root"}>
            <PageHeader name={"GERECHTEN PLACEHOLDER!"}/>
            </div>
        </div>
    );
}

export default DishesPage;