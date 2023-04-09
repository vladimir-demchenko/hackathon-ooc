import React from "react";

export interface MenuItemType {
    path: string;
    text: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const MenuItemsList: MenuItemType[] = [
    {
        path: '/',
        text: 'Дашборд'
    },
    {
        path: '/registry',
        text: 'Объекты'
    },
    {
        path: '/complete',
        text: 'Выполнено'
    },
    {
        path: '/meetings',
        text: 'Совещания'
    },
]