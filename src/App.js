import './App.css';
import AppHeader from "./Components/Headers/AppHeader";
import SideMenu from "./Components/Menus/SideMenu";
import PageHeader from "./Components/Headers/PageHeader";
import Button from "./Components/Buttons/Button";

function App() {
  return (
    <>
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