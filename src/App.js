import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
        <Route path="/bestellen">
            <OrderPage/>
        </Route>
        <Route path="/gerechten">
            <DishesPage/>
        </Route>
        <Route path="/menus">
            <MenuPage/>
        </Route>
        <Route exact path="/recepten">
            <RecipePage/>
        </Route>
        <Route exact path="/recepten/nieuw">
            <NewRecipePage/>
        </Route>
        <Route exact path="/recepten/dressings">
            <RecipeDressings/>
        </Route>
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
    </Switch>
    </Router>
        </div>
  );
};

export default App;