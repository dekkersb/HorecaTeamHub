import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeComponents() {

    const [componentRecipes, setComponentRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/api/recipes/types?type=Componenten`);
            setComponentRecipes(response.data);
            console.log("dit is de data:", response.data)
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
                    {componentRecipes && componentRecipes.map((componentrecipe) => (
                        <div key={componentrecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={componentrecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {componentrecipe.type}
                                    <br/>
                                    Hoeveelheid: {componentrecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {componentrecipe.ingredients}
                                </div>
                                <div className="recipeSteps">
                                    Stappen: {componentrecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={componentrecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={componentrecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={componentrecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeComponents;