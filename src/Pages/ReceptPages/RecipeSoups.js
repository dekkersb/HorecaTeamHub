import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeSoups() {

    const [soupRecipes, setSoupRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/recepten/types?type=Soepen`);
            setSoupRecipes(response.data);
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
                    {soupRecipes && soupRecipes.map((souprecipe) => (
                        <div key={souprecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={souprecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {souprecipe.type}
                                    <br/>
                                    Hoeveelheid: {souprecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {souprecipe.ingredients}
                                </div>

                                <div className="recipeSteps">
                                    Stappen: {souprecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={souprecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={souprecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={souprecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeSoups;