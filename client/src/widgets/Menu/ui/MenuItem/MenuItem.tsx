import { FC, useState } from 'react';
import { MenuItemType } from 'widgets/Menu/models/items';
import cls from './MenuItem.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface MenuItemProps extends NavLinkProps {
    item: MenuItemType;
    collapsed: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({ item, collapsed }) => {

    return (
        <div className={cls.menuItemWrapper}>
            <NavLink to={item.path} className={({isActive}) => classNames(cls.item, {[cls.collapsed]: collapsed, [cls.active]:isActive })}>
                <div className={cls.menuItemBar}></div>
                <div className={cls.icon}></div>
                <span className={cls.text}>{item.text}</span>
            </NavLink>
        </div>
    );
};