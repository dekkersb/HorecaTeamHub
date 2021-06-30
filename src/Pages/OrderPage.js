import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";
import "./OrderPage.css";

function OrderPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Bestellen"}/>
            <div className={"order-root"}>
            <PageHeader name={"BESTELLEN PLACEHOLDER!"}/>
            </div>
            </div>
    );
}

export default OrderPage;