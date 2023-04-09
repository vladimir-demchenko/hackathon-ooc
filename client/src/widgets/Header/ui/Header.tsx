import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { SearchInput } from 'shared/ui/SearchInput/SearchInput';
import { UserCard } from 'widgets/UserCard';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({className}) => {
    return (
        <div className={classNames(cls.header, {}, [className])}>
            <SearchInput/>
            <UserCard/>
        </div>
    );
};

