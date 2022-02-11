import React, {useEffect, useState} from 'react';
import AppHeader from "../../Components/Headers/AppHeader";
import SideMenuRecipes from "../../Components/Menus/Sidemenus/SideMenuRecipes";
import "./RecipePage.css";
import axios from "axios";
import PageHeader from "../../Components/Headers/PageHeader";

function RecipeDressings() {

    const [dressingRecipes, setDressingRecipes] = useState([]);

    async function fetchRecipes() {

        try {
            const response = await axios.get(
                `http://localhost:8080/api/recipes/types?type=Dressings`);
            setDressingRecipes(response.data);
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
                    {dressingRecipes && dressingRecipes.map((dressingrecipe) => (
                        <div key={dressingrecipe.id} className="completeSmallRecipeBox">
                            <div className="recipeBox">
                                <div className="recipeName">
                                    <PageHeader name={dressingrecipe.name}/>
                                </div>
                                <div className="recipeInformation">
                                    Type: {dressingrecipe.type}
                                    <br/>
                                    Hoeveelheid: {dressingrecipe.quantity}
                                </div>
                                <div className="recipeIngredients">
                                    Ingredienten: {dressingrecipe.ingredients}
                                </div>

                                <div className="recipeSteps">
                                    Stappen: {dressingrecipe.steps}
                                </div>
                                <ul className="recipeAllergics">
                                    Allergieën:
                                    <li> Gluten: <input type="checkbox" defaultChecked={dressingrecipe.gluten}/> </li>
                                    <li> Lactose: <input type="checkbox" defaultChecked={dressingrecipe.lactose}/> </li>
                                    <li> Noten: <input type="checkbox" defaultChecked={dressingrecipe.noten}/> </li>
                                </ul>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default RecipeDressings;