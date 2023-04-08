import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import cls from './Menu.module.scss';

interface MenuProps {
    className?: string;
}

export const Menu: FC<MenuProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={classNames(cls.menu, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>Toggle</Button>
            <div>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'/second'}>Вторая страница</AppLink>
            </div>            
        </div>
    );
};
