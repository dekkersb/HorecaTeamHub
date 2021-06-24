import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import DishesPage from "./Pages/DishesPage";
import Registerpage from "./Pages/Registerpage";
import MenuPage from "./Pages/MenuPage";
import OrderPage from "./Pages/OrderPage";
import RecipePage from "./Pages/RecipePage";
import Loginpage from "./Pages/Loginpage";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
<Router>
    <Switch>
        <Route exact path="/">
            <Home/>
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
        <Route path="/recepten">
            <RecipePage/>
        </Route>
    </Switch>
    </Router>
        </div>
  );
};

export default App;