import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi"

export const SidebarDataRecipes = [
    {
        title: 'Nieuw recept',
        path: '/recepten/nieuw',
        icon: <FaIcons.FaPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Dressings',
        path: '/recepten/dressings',
        icon: <FaIcons.FaWineBottle />,
        cName: 'nav-text'
    },
    {
        title: 'Soepen',
        path: '/recepten/soepen',
        icon: <FaIcons.FaMugHot/>,
        cName: 'nav-text'
    },
    {
        title: 'Sauzen',
        path: '/recepten/sauzen',
        icon: <FaIcons.FaOilCan />,
        cName: 'nav-text'
    },
    {
        title: 'Desserts',
        path: '/recepten/desserts',
        icon: <FaIcons.FaIceCream />,
        cName: 'nav-text'
    },
    {
        title: 'Componenten',
        path: '/recepten/componenten',
        icon: <BsIcons.BsGearFill />,
        cName: 'nav-text'
    },
    {
        title: 'Gluten vrij',
        path: '/recepten/glutenvrij',
        icon: <GiIcons.GiWheat />,
        cName: 'nav-text'
    },
    {
        title: 'Lactose vrij',
        path: '/recepten/lactosevrij',
        icon: <GiIcons.GiMilkCarton />,
        cName: 'nav-text'
    },
    {
        title: 'Noten vrij',
        path: '/recepten/notenvrij',
        icon: <GiIcons.GiPeanut />,
        cName: 'nav-text'
    },
];