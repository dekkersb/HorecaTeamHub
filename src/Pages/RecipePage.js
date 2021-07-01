import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenuRecipes from "../Components/Menus/Sidemenus/SideMenuRecipes";
import PageHeader from "../Components/Headers/PageHeader";
import "./RecipePage.css";

function RecipePage() {
    return (
        <div>
            <AppHeader/>
            <SideMenuRecipes name={"Recepten"}/>
            <div className={"recipe-root"}>
            <PageHeader name={"RECEPTEN PLACEHOLDER!"}/>
            </div>
        </div>
    );
}

export default RecipePage;