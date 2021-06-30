import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";
import "./RecipePage.css";

function RecipePage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Recepten"}/>
            <div className={"recipe-root"}>
            <PageHeader name={"RECEPTEN PLACEHOLDER!"}/>
            </div>
        </div>
    );
}

export default RecipePage;