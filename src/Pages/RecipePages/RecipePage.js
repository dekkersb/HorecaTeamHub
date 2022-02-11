import React from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import RecipeInputfield from "../../Components/Forms/RecipeInputfield";
import Recipe from "../../Components/Forms/Recipe";

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