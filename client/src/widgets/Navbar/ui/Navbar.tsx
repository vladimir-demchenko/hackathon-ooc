import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'/second'}>Вторая страница</AppLink>
            </div>
        </div>
    );
};
