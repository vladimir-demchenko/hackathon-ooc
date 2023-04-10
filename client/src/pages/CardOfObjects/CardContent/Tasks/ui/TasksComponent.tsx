import { Table } from '@gravity-ui/uikit';
import { FC } from 'react';
import cls from './TasksComponent.module.scss';

const mockData: Array<Record<string, number | string>> = [
    {
        id: 1,
        name: 'Подача заявления в суд о признании права  собственности города',
        deadline: '1 мес',
        user: 'ДГИ'
    },
    {
        'id': 2,
        name: 'Признание права собственности города в судебном  порядке',
        deadline: '6 мес',
        user: 'ДГИ'
    },
    {
        id: 3,
        name: 'Признание права собственности города в судебном  порядке',
        deadline: '6 мес',
        user: 'ДГИ'
    },
    {
        id: 4,
        name: 'Признание права собственности города в судебном  порядке',
        deadline: '6 мес',
        user: 'ДГИ'
    },
    {
        id: 5,
        name: 'Признание права собственности города в судебном  порядке',
        deadline: '6 мес',
        user: 'ДГИ'
    },
    {
        id: 6,
        name: 'Признание права собственности города в судебном  порядке',
        deadline: '6 мес',
        user: 'ДГИ'
    },
    {
        id: 7,
        name: 'Признание права собственности города в судебном  порядке',
        deadline: '6 мес',
        user: 'ДГИ'
    },
]

const columns = [
    {
        id: 'id',
        name: 'id'
    },
    {
        id: 'name',
        name: 'Мероприятие'
    },
    {
        id: 'deadline',
        name: 'Срок'
    },
    {
        id: 'user',
        name: 'Ответственный'
    },
]

export const TasksComponent: FC = () => {
    return (
        <div>
            <Table
                data={mockData}
                columns={columns}
            />
        </div>
    );
};