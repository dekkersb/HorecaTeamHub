import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as GiIcons from "react-icons/gi";

export const SidebarDataDishes = [
    {
        title: 'Voorgerechten',
        path: '/gerechten/voorgerechten',
        icon: <FaIcons.FaUtensils />,
        cName: 'nav-text'
    },
    {
        title: 'Soepen',
        path: '/gerechten/soepen',
        icon: <FaIcons.FaMugHot />,
        cName: 'nav-text'
    },
    {
        title: 'Tussengerechten',
        path: '/gerechten/tussengerechten',
        icon: <GiIcons.GiShrimp />,
        cName: 'nav-text'
    },
    {
        title: 'Hoofdgerechten',
        path: '/gerechten/hoofdgerechten',
        icon: <GiIcons.GiHotMeal />,
        cName: 'nav-text'
    },
    {
        title: 'Desserts',
        path: '/gerechten/desserts',
        icon: <FaIcons.FaIceCream />,
        cName: 'nav-text'
    }
];