import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataOrder = [
    {
        title: 'Vis',
        path: '/bestellen/vis',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Groente',
        path: '/bestellen/groente',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Zuivel',
        path: '/bestellen/zuivel',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Groothandel',
        path: '/bestellen/groothandel',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Asian Foods',
        path: '/bestellen/asian',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Streetfood',
        path: 'https://www.la-streetfood.com/',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Groothandel',
        path: '/bestellen/groothandel',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }
];