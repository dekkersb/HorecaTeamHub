import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeDesserts() {

    const [dessertRecipes, setDessertRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/recepten/types?type=Desserts`);
            setDessertRecipes(response.data);
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
                    {dessertRecipes && dessertRecipes.map((dessertrecipe) => (
                        <div key={dessertrecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={dessertrecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {dessertrecipe.type}
                                    <br/>
                                    Hoeveelheid: {dessertrecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {dessertrecipe.ingredients}
                                </div>
                                <div className="recipeSteps">
                                    Stappen: {dessertrecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={dessertrecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={dessertrecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={dessertrecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeDesserts;