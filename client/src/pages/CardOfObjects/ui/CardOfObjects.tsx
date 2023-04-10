import { Tabs } from '@gravity-ui/uikit';
import { FC, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { MainContent } from '../CardContent/Main';
import ArrowBack from 'shared/assets/icons/arrowBack.svg';  
import cls from './CardOfObjects.module.scss';
import { TasksComponent } from '../CardContent/Tasks';
import '@gravity-ui/uikit/styles/styles.css';
import { MediaComponent } from '../CardContent/Media';

interface CardOfObjectsProps {
    className?: string;
}

export const CardOfObjects: FC<CardOfObjectsProps> = (props) => {
    const navigate = useNavigate();
    const [active, setActive] = useState('main');
    
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={classNames(cls.registry, {}, [props.className])}>
            <div className={cls.title}>
                <Button onClick={handleBack} className={cls.btnBack}><ArrowBack/></Button>
                <span className={cls.text}>Карточка объекта</span>
            </div>
            <div className={classNames(cls.content)}>
                <div className={cls.card}>
                    <div className={cls.cardContainer}>
                        <div className={cls.cardHeader}>
                            <Tabs className={cls.tabs} size='xl' activeTab={active}>
                                <Tabs.Item title='Основное' id='main' onClick={(tabId) => setActive(tabId)}/>
                                <Tabs.Item title='Задачи' id='tasks' onClick={(tabId) => setActive(tabId)}/>
                                <Tabs.Item title='Материалы' id='media' onClick={(tabId) => setActive(tabId)}/>
                            </Tabs>
                            <div className={cls.headerButtons}>
                                <Button className={cls.edit}>Изменить</Button>
                                <Button className={cls.delete}>Удалить</Button>
                            </div>
                        </div>
                        <div className={cls.cardContent}>
                            {active === 'main' ? <MainContent/> : <></>}
                            {active === 'tasks' ? <TasksComponent/> : <></>}
                            {active === 'media' ? <MediaComponent/> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};