import React from 'react';
import AppHeader from "../Components/Headers/AppHeader";
import SideMenu from "../Components/Menus/SideMenu";
import PageHeader from "../Components/Headers/PageHeader";

function OrderPage() {
    return (
        <div>
            <AppHeader/>
            <SideMenu name={"Bestellen"}/>
            <PageHeader name={"BESTELLEN PLACEHOLDER!"}/>
        </div>
    );
}

export default OrderPage;