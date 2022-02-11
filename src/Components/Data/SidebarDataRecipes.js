import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi"

export const SidebarDataRecipes = [
    {
        title: 'Nieuw recept',
        path: '/recipes/new',
        icon: <FaIcons.FaPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Dressings',
        path: '/recipes/dressings',
        icon: <FaIcons.FaWineBottle />,
        cName: 'nav-text'
    },
    {
        title: 'Soepen',
        path: '/recipes/soups',
        icon: <FaIcons.FaMugHot/>,
        cName: 'nav-text'
    },
    {
        title: 'Sauzen',
        path: '/recipes/sauces',
        icon: <FaIcons.FaOilCan />,
        cName: 'nav-text'
    },
    {
        title: 'Desserts',
        path: '/recipes/desserts',
        icon: <FaIcons.FaIceCream />,
        cName: 'nav-text'
    },
    {
        title: 'Componenten',
        path: '/recipes/components',
        icon: <BsIcons.BsGearFill />,
        cName: 'nav-text'
    },
    {
        title: 'Gluten vrij',
        path: '/recipes/glutenfree',
        icon: <GiIcons.GiWheat />,
        cName: 'nav-text'
    },
    {
        title: 'Lactose vrij',
        path: '/recipes/lactosefree',
        icon: <GiIcons.GiMilkCarton />,
        cName: 'nav-text'
    },
    {
        title: 'Noten vrij',
        path: '/recipes/nutsfree',
        icon: <GiIcons.GiPeanut />,
        cName: 'nav-text'
    },
];