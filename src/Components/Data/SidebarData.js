import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Mijn uren',
        path: '/mijn-uren',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Mijn gerechten',
        path: '/gerechten',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Log uit',
        path: '/login',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }
];