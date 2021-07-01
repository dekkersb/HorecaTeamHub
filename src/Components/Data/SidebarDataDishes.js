import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataDishes = [
    {
        title: 'Voorgerechten',
        path: '/gerechten/voorgerechten',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Soepen',
        path: '/gerechten/soepen',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Tussengerechten',
        path: '/gerechten/tussengerechten',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Hoofdgerechten',
        path: '/gerechten/hoofdgerechten',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Desserts',
        path: '/gerechten/desserts',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }
];