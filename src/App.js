import './App.css';
import AppHeader from "./Components/Headers/AppHeader";
import logo from "./assets/logo.png";

function App() {
  return (
    <div>
      <h6>HorecaTeamHub©</h6>
        <img src={logo} alt="logo"/>
  <AppHeader/>
    </div>
  );
}

export default App;