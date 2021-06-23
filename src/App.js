import './App.css';
import AppHeader from "./Components/Headers/AppHeader";
import logo from "./assets/logo.png";
import SideMenu from "./Components/Menus/SideMenu";
import DropDownMenu from "./Components/Menus/DropDownMenu";
import PageHeader from "./Components/Headers/PageHeader";
import Button from "./Components/Buttons/Button";

function App() {
  return (
    <>
      <div className="app-header">
        <img className={"logo"} src={logo} alt="logo"/>
        <span className="dropdown-menu"><DropDownMenu/></span>   <h6>HorecaTeamHub©</h6>
      </div>

      <AppHeader/>

<SideMenu
    name={"Gerechten"}
/>

        <div className={"body"}>
<PageHeader name={"Dashboard"}/>
            <Button type={"Print!"}/>
        </div>

        </>
  );
};

export default App;