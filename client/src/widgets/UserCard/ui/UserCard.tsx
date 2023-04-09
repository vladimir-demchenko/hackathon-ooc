import { FC } from 'react';
import cls from './UserCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface UserCardProps {
    className?: string;
}

export const UserCard: FC<UserCardProps> = ({ className }) => {

    return (
        <div className={classNames(cls.userCardWrapper, {}, [className])}>
            <div className={cls.userCardFIO}>
                <span className={cls.userCardName}>Маргарита<br/>Рождественская</span>
            </div>
            <Button className={cls.userCardButton}>D</Button>
        </div>
    );
};