import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends NavLinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <NavLink to={to} className={({isActive}) => classNames('', {[cls.active]: isActive} ,[className])} {...otherProps}>
            {children}
        </NavLink>
    );
};
