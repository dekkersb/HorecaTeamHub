import './App.css';
import AppHeader from "./Components/Headers/AppHeader";
import SideMenu from "./Components/Menus/SideMenu";
import Recept from "./Components/Content/Dashboard";



function App() {
  return (
    <>
      <AppHeader/>
<SideMenu name={"Gerechten"}/>
        <Recept/>
        </>
  );
};

export default App;