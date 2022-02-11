import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeGlutenFree() {

    const [glutenfreeRecipes, setGlutenfreeRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/api/recipes/glutenfree`);
            setGlutenfreeRecipes(response.data);
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
                    {glutenfreeRecipes && glutenfreeRecipes.map((glutenfreerecipe) => (
                        <div key={glutenfreerecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={glutenfreerecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {glutenfreerecipe.type}
                                    <br/>
                                    Hoeveelheid: {glutenfreerecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {glutenfreerecipe.ingredients}
                                </div>
                                <div className="recipeSteps">
                                    Stappen: {glutenfreerecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={glutenfreerecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={glutenfreerecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={glutenfreerecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeGlutenFree;