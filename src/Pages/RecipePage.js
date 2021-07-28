import React, {useState} from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenuRecipes from "../Components/Menus/Sidemenus/SideMenuRecipes";
import PageHeader from "../Components/Headers/PageHeader";
import "./RecipePage.css";
import Recipe from "../Components/Forms/Recipe";

function RecipePage() {



    return (
        <div>
            <AppHeader/>
            <SideMenuRecipes name={"Recepten"}/>
            <div className={"recipe-root"}>
                <Recipe/>
            </div>


        </div>
    );
}

export default RecipePage;