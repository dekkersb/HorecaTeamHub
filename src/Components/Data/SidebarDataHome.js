import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";

export const SidebarDataHome = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Mijn uren',
        path: '/mijn-uren',
        icon: <FaIcons.FaUserClock />,
        cName: 'nav-text'
    },
    {
        title: 'Mijn gerechten',
        path: '/mijn-gerechten',
        icon: <GiIcons.GiMeal />,
        cName: 'nav-text'
    },
    {
        title: 'Log uit',
        path: '/',
        icon: <FaIcons.FaSignOutAlt />,
        cName: 'nav-text'
    }
];