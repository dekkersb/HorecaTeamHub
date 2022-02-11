import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import DishesPage from "./Pages/DishesPage";
import Registerpage from "./Pages/Registerpage";
import MenuPage from "./Pages/MenuPage";
import OrderPage from "./Pages/OrderPage";
import RecipePage from "./Pages/RecipePages/RecipePage";
import Loginpage from "./Pages/Loginpage";
import NewRecipePage from "./Pages/RecipePages/NewRecipePage";
import RecipeGlutenfree from "./Pages/RecipePages/RecipeGlutenfree";
import RecipeDressings from "./Pages/RecipePages/RecipeDressings";
import RecipeSoups from "./Pages/RecipePages/RecipeSoups";
import RecipeSauces from "./Pages/RecipePages/RecipeSauces";
import RecipeDesserts from "./Pages/RecipePages/RecipeDesserts";
import RecipeComponents from "./Pages/RecipePages/RecipeComponents";
import RecipeLactosefree from "./Pages/RecipePages/RecipeLactosefree";
import RecipeNutsfree from "./Pages/RecipePages/RecipeNutsfree";

function App() {
  return (
    <div>
<Router>
    <Switch>
        <Route exact path="/">
            <Loginpage/>
        </Route>
        <Route path="/dashboard">
            <DashboardPage/>
        </Route>
        <Route path="/register">
            <Registerpage/>
        </Route>
        <Route path="/login">
            <Loginpage/>
        </Route>
        <Route path="/order">
            <OrderPage/>
        </Route>
        <Route path="/dishes">
            <DishesPage/>
        </Route>
        <Route path="/menus">
            <MenuPage/>
        </Route>
        <Route exact path="/recipes">
            <RecipePage/>
        </Route>
        <Route exact path="/recipes/new">
            <NewRecipePage/>
        </Route>
        <Route exact path="/recipes/dressings">
            <RecipeDressings/>
        </Route>
        <Route exact path="/recipes/soups">
            <RecipeSoups/>
        </Route>
        <Route exact path="/recipes/sauces">
            <RecipeSauces/>
        </Route>
        <Route exact path="/recipes/desserts">
            <RecipeDesserts/>
        </Route>
        <Route exact path="/recipes/components">
            <RecipeComponents/>
        </Route>
        <Route exact path="/recipes/glutenfree">
            <RecipeGlutenfree/>
        </Route>
        <Route exact path="/recipes/lactosefree">
            <RecipeLactosefree/>
        </Route>
        <Route exact path="/recipes/nutsfree">
            <RecipeNutsfree/>
        </Route>
    </Switch>
    </Router>
        </div>
  );
};

export default App;