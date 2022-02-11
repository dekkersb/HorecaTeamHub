import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeLactosefree() {

    const [lactosefreeRecipes, setLactosefreeRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/api/recipe/lactosefree`);
            setLactosefreeRecipes(response.data);
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
                    {lactosefreeRecipes && lactosefreeRecipes.map((lactosefreerecipe) => (
                        <div key={lactosefreerecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={lactosefreerecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {lactosefreerecipe.type}
                                    <br/>
                                    Hoeveelheid: {lactosefreerecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {lactosefreerecipe.ingredients}
                                </div>
                                <div className="recipeSteps">
                                    Stappen: {lactosefreerecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={lactosefreerecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={lactosefreerecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={lactosefreerecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeLactosefree;