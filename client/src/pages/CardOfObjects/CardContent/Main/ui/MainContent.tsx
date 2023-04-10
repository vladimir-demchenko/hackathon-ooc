import { FC } from 'react';
import cls from './MainContent.module.scss';

const defualtValue: Array<Record<string, string>> = [
    {
        key: 'Округ',
        value: 'Юго-Западный автономный округ'
    },
    {
        key: 'Состояние объекта',
        value: 'Хорошее'
    },
    {
        key: 'Район',
        value: 'Тропарёво-Никулино'
    },
    {
        key: 'Площадь объекта',
        value: '5810,68 м'
    },
    {
        key: 'Адрес',
        value: 'г. Москва, пр-т. Вернадского, д.78, стр. 6, кв. А-160'
    },
    {
        key: 'Собственник',
        value: 'Иванов Иван Иванович'
    },
    {
        key: 'Тип объекта',
        value: 'Другое'
    },
    {
        key: 'Фактический пользователь',
        value: 'Иванов Иван Иванович'
    },
]

export const MainContent: FC = () => {
    return (
        <div className={cls.mainContainer}>
            {defualtValue.map((item) => (
                <div key={item.key}>
                    <span>{item.key}:</span>
                    <br/>
                    {item.value}
                </div>
            ))}
        </div>
    );
};