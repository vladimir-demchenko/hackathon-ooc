import { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div>
            <div>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'/second'}>Вторая страница</AppLink>
            </div>
        </div>
    );
};
