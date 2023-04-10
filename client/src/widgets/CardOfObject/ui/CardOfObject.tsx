import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CardOfObject.module.scss';

interface CardOfObjectProps {
    className?: string;
    view: 'card' | 'list';
    data: Record<string, string>
}

export const CardOfObject: FC<CardOfObjectProps> = ({ className, view, data }) => {
    const navigate = useNavigate();    

    const {address, zone, region} = data;
    
    const handleClickCard = () => {
        console.log('huy');
        navigate('/card?id=123123');
    }

    return (
        <div onClick={handleClickCard} className={classNames(cls.object, {[cls.card]: view === 'card', [cls.list]: view === 'list'}, [className])}>
            <div className={cls.cardContainer}>
                <div className={cls.object_address}>
                    <span>Адрес:</span>
                    <div>{address}</div>
                </div>
                <div className={cls.object_zone}>
                    <span>Округ:</span>
                    <div>{zone}</div>
                </div>
                <div className={cls.object_region}>
                    <span>Район:</span>
                    <div>{region}</div>
                </div>
            </div>
        </div>
    );
};