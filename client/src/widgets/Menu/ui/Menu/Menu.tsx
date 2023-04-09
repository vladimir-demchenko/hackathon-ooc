import { FC, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import cls from './Menu.module.scss';
import { MenuItemsList } from 'widgets/Menu/models/items';
import { MenuItem } from '../MenuItem/MenuItem';
import MenuButton from 'shared/assets/icons/menu.svg';

interface MenuProps {
    className?: string;
}

export const Menu: FC<MenuProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }


    const itemsList = useMemo(() => MenuItemsList.map((item) => (
        <MenuItem
            to={item.path}
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div className={classNames(cls.menu, {[cls.collapsed]: collapsed}, [className])}>
            <div className={cls.menu_header}>
                <Button className={cls.menu_header__button} onClick={onToggle}><MenuButton/></Button>
                <span className={cls.menu_header__title}>Меню</span>
            </div>
            <div className={cls.items}>
                {itemsList}
            </div>            
        </div>
    );
};
