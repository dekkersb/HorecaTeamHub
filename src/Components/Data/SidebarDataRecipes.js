import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarDataRecipes = [
    {
        title: 'Nieuw recept',
        path: '/recepten/nieuw',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Dressings',
        path: '/recepten/dressings',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Soepen',
        path: '/recepten/soepen',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Sauzen',
        path: '/recepten/sauzen',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Desserts',
        path: '/recepten/desserts',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Componenten',
        path: '/recepten/componenten',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Garnituren',
        path: '/recepten/garnituren',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Crèmes',
        path: '/recepten/crèmes',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: "Curry's",
        path: '/recepten/currys',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }
];