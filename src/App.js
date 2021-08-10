import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import DishesPage from "./Pages/DishesPage";
import Registerpage from "./Pages/Registerpage";
import MenuPage from "./Pages/MenuPage";
import OrderPage from "./Pages/OrderPage";
import RecipePage from "./Pages/ReceptPages/RecipePage";
import Loginpage from "./Pages/Loginpage";
import NewRecipePage from "./Pages/ReceptPages/NewRecipePage";
import RecipeGlutenfree from "./Pages/ReceptPages/RecipeGlutenfree";
import RecipeDressings from "./Pages/ReceptPages/RecipeDressings";
import RecipeSoups from "./Pages/ReceptPages/RecipeSoups";
import RecipeSauces from "./Pages/ReceptPages/RecipeSauces";
import RecipeDesserts from "./Pages/ReceptPages/RecipeDesserts";
import RecipeComponents from "./Pages/ReceptPages/RecipeComponents";
import RecipeLactosefree from "./Pages/ReceptPages/RecipeLactosefree";
import RecipeNutsfree from "./Pages/ReceptPages/RecipeNutsfree";
import {useAuthContext} from "./context/AuthContextProvider";
import RouterProtector from "./Components/Menus/RouterProtector";
import PageNotFound from "./Pages/PageNotFound";

function App() {
    const {user} = useAuthContext()
  return (
    <div>
    <Switch>
        <Route exact path="/">
            <Loginpage/>
        </Route>
        <Route path="/register">
            <Registerpage/>
        </Route>
        <Route path="/login">
            <Loginpage/>
        </Route>
        <RouterProtector exact path="/dashboard" component={DashboardPage}/>
        <RouterProtector exact path="/bestellen" component={OrderPage}/>
        <RouterProtector exact path="/gerechten" component={DishesPage}/>
        <RouterProtector exact path="/menus" component={MenuPage}/>
        <RouterProtector exact path="/recepten" component={RecipePage}/>
        {user && user.authority === "ROLE_ADMIN"?
        <RouterProtector exact path="/recepten/nieuw" component={NewRecipePage}/>: ""}
        <RouterProtector exact path="/recepten/dressings" component={RecipeDressings}/>
        <Route exact path="/recepten/soepen">
            <RecipeSoups/>
        </Route>
        <Route exact path="/recepten/sauzen">
            <RecipeSauces/>
        </Route>
        <Route exact path="/recepten/desserts">
            <RecipeDesserts/>
        </Route>
        <Route exact path="/recepten/componenten">
            <RecipeComponents/>
        </Route>
        <Route exact path="/recepten/glutenvrij">
            <RecipeGlutenfree/>
        </Route>
        <Route exact path="/recepten/lactosevrij">
            <RecipeLactosefree/>
        </Route>
        <Route exact path="/recepten/notenvrij">
            <RecipeNutsfree/>
        </Route>
        <Route path="/*" component={PageNotFound}/>
    </Switch>
        </div>
  );
};

export default App;