import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenuHome from "../Components/Menus/Sidemenus/SideMenuHome";
import DashboardInputfield from "../Components/Forms/DashboardInputfield";
import PageHeader from "../Components/Headers/PageHeader";
import "./DashboardPage.css";
import Dashboard from "../Components/Content/Dashboard";


function DashboardPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenuHome name={"Dashboard"}
                          page={"Home"}/>
            <div className={"dashboard-root"}>
                <PageHeader name={"Laat een bericht achter..."}/>
                <span className={"inputfield"}>
            <DashboardInputfield/>
                </span>
            </div>
            <div>
            </div>
            <span>
                <Dashboard/>
            </span>
        </div>
    );
}

export default DashboardPage;