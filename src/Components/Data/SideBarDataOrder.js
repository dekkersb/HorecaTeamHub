import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from "react-icons/gi"

export const SidebarDataOrder = [
    {
        title: 'Vis',
        path: '/bestellen/vis',
        icon: <FaIcons.FaFish />,
        cName: 'nav-text'

    },
    {
        title: 'Groente',
        path: '/bestellen/groente',
        icon: <FaIcons.FaCarrot />,
        cName: 'nav-text'
    },
    {
        title: 'Zuivel',
        path: '/bestellen/zuivel',
        icon: <GiIcons.GiMilkCarton />,
        cName: 'nav-text'
    },
    {
        title: 'Groothandel',
        path: '/bestellen/groothandel',
        icon: <FaIcons.FaDollyFlatbed />,
        cName: 'nav-text'
    },
    {
        title: 'Asian Foods',
        path: '/bestellen/asian',
        icon: <GiIcons.GiNoodles />,
        cName: 'nav-text'
    },
    {
        title: 'Streetfood',
        path: '/bestellen/streetfood',
        icon: <FaIcons.FaHamburger />,
        cName: 'nav-text'
    },
    {
        title: 'Hygiene',
        path: '/bestellen/hygiene',
        icon: <GiIcons.GiBroom />,
        cName: 'nav-text'
    },
    {
        title: 'Bakker',
        path: '/bestellen/bakker',
        icon: <FaIcons.FaBreadSlice />,
        cName: 'nav-text'
    },
];