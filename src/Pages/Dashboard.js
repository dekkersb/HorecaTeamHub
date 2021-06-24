import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import DashboardInputfield from "../Components/Forms/DashboardInputfield";
import PageHeader from "../Components/Headers/PageHeader";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Dashboard"}/>
            <div className={"dashboard-root"}>
                <PageHeader name={"Laat een bericht achter..."}/>
            <DashboardInputfield/>
            </div>
        </div>
    );
}

export default Dashboard;