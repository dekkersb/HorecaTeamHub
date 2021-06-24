import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";

function RecipePage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Recepten"}/>
            <PageHeader name={"RECEPTEN PLACEHOLDER!"}/>

        </div>
    );
}

export default RecipePage;