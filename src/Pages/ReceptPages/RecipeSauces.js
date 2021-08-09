import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeSauces() {

    const [sauceRecipes, setSauceRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/recepten/types?type=Sauzen`);
            setSauceRecipes(response.data);
            console.log("dit is de dressing data:", response.data)
        } catch {
            console.log("Recept ophalen gaat niet goed!")
        }
    }

    useEffect(() => {
        fetchRecipes();
    }, []);
    return (

        <div>
            <AppHeader/>
            <SideMenuRecipes name={"Recepten"}/>
            <div className={"recipe-root"}>
                <div className="completeRecipeBox">
                    {sauceRecipes && sauceRecipes.map((saucerecipe) => (
                        <div key={saucerecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={saucerecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {saucerecipe.type}
                                    <br/>
                                    Hoeveelheid: {saucerecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {saucerecipe.ingredients}
                                </div>

                                <div className="recipeSteps">
                                    Stappen: {saucerecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={saucerecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={saucerecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={saucerecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeSauces;