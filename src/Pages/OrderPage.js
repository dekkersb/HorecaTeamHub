import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenuOrder from "../Components/Menus/Sidemenus/SideMenuOrder";
import PageHeader from "../Components/Headers/PageHeader";
import "./OrderPage.css";

function OrderPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenuOrder name={"Bestellen"}
                          page={"Order"}/>
            <div className={"order-root"}>
            <PageHeader name={"BESTELLEN PLACEHOLDER!"}/>
            </div>
            </div>
    );
}

export default OrderPage;