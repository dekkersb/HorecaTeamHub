import './App.css';
import AppHeader from "./Components/Headers/AppHeader";
import logo from "./assets/logo.png";
import SideMenu from "./Components/Menus/SideMenu";
import DropDownMenu from "./Components/Menus/DropDownMenu";

function App() {
  return (
    <>
      <div className="app-header">
        <img className={"logo"} src={logo} alt="logo"/>
        <span className="dropdown-menu"><DropDownMenu/></span>   <h6>HorecaTeamHub©</h6>
      </div>
      <AppHeader/>
    <div>
      <SideMenu
      name={"Recepten"}
      />

    </div>

    </>
  );
}

export default App;