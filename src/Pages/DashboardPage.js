import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import DashboardInputfield from "../Components/Forms/DashboardInputfield";
import PageHeader from "../Components/Headers/PageHeader";
import "./DashboardPage.css";

function DashboardPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Dashboard"}/>
            <div className={"dashboard-root"}>
                <PageHeader name={"Laat een bericht achter..."}/>
                <span className={"inputfield"}>
            <DashboardInputfield/>
                </span>
            </div>
        </div>
    );
}

export default DashboardPage;