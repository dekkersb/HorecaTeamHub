import React from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import RecipeInputfield from "../../Components/Forms/RecipeInputfield";

function NewRecipePage() {

    return (
        <div>
            <AppHeader/>
            <SideMenuRecipes name={"Recepten"}/>
            <div className={"recipe-root"}>
                <RecipeInputfield/>
            </div>
        </div>
    );
}

export default NewRecipePage;