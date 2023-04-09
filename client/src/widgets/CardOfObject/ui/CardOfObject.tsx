import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CardOfObject.module.scss';

interface CardOfObjectProps {
    className?: string;
    view: 'card' | 'list';
}

export const CardOfObject: FC<CardOfObjectProps> = ({ className, view }) => {

    return (
        <div className={classNames('', {[cls.card]: view === 'card', [cls.list]: view === 'list'}, [className])}>
            
        </div>
    );
};