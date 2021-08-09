import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeNutsfree() {

    const [nutsfreeRecipes, setNutsfreeRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/recepten/notenvrij`);
            setNutsfreeRecipes(response.data);
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
                    {nutsfreeRecipes && nutsfreeRecipes.map((nutsfreerecipe) => (
                        <div key={nutsfreerecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={nutsfreerecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {nutsfreerecipe.type}
                                    <br/>
                                    Hoeveelheid: {nutsfreerecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {nutsfreerecipe.ingredients}
                                </div>
                                <div className="recipeSteps">
                                    Stappen: {nutsfreerecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={nutsfreerecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={nutsfreerecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={nutsfreerecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeNutsfree;