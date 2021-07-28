import React, {useEffect, useState} from 'react';
import axios from "axios";
import PageHeader from "../Headers/PageHeader";

function Recipe() {
    const [recipes, setRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/recept`);
            setRecipes(response.data);
            console.log("dit is de data:", response.data)
        } catch {
            console.log("Recept ophalen gaat niet goed!")
        }
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="completeRecipeBox">
            {recipes && recipes.map((recipe) => (
                <div key={recipe.id} className="completeSmallRecipeBox">
                    <div className="recipeBox">
                        <div className="recipeName">
               <PageHeader name={recipe.name}/>
                        </div>
                        <div className="recipeInformation">
                            Type: {recipe.type}
                            <br/>
                            Hoeveelheid: {recipe.quantity}
                        </div>
                        <div className="recipeIngredients">
                            Ingredienten:
                        </div>
                        <div className="recipeSteps">
                            Stappen: {recipe.steps}
                        </div>
                        <ul className="recipeAllergics">
                            Allergieën:
                            <li> Gluten: <input type="checkbox" defaultChecked={recipe.gluten}/> </li>
                            <li> Lactose: <input type="checkbox" defaultChecked={recipe.lactose}/> </li>
                            <li> Noten: <input type="checkbox" defaultChecked={recipe.noten}/> </li>
                        </ul>
                </div>
                </div>))}
        </div>
    );
}

export default Recipe;