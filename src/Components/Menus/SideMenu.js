import React from 'react';
import SideMenuButton from "../Buttons/SideMenuButton";
import "./SideMenu.css";

function SideMenu(props) {
    return (
        <div className={"sidemenu"}>
            <h2>{props.name}</h2>
<span className={"header-sidemenu"}>
            <SideMenuButton name={"Nieuw recept"}/>
</span>
            <SideMenuButton name={"Dressings"}/>
            <SideMenuButton name={"Soepen"}/>
            <SideMenuButton name={"Sauzen"}/>
            <SideMenuButton name={"Desserts"}/>
            <SideMenuButton name={"Componenten"}/>
            <SideMenuButton name={"Garnituren"}/>
            <SideMenuButton name={"Curry's"}/>
            <SideMenuButton name={"Creme's"}/>
        </div>
    );
}

export default SideMenu;