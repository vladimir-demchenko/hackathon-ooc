import { FC, useRef, useState } from 'react';
import cls from './OjectsRegistry.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CardOfObject } from 'widgets/CardOfObject';
import { RadioButton } from '@gravity-ui/uikit';
import "@gravity-ui/uikit/styles/styles.css"

interface ObjectsRegistryProps {
    className?: string;
}

type containerType = 'card' | 'list';

const mockData: Array<Record<string, string>> = [
  {
    id: '1',
    address: 'г. Москва, пр-т. Вернадского, д.78, стр. 6, кв. А-160',
    zone: 'Юго-Западный автономный округ',
    region: 'Тропарёво-Никулино'
  },
  {
    id: '2',
    address: 'г. Москва, пр-т. Вернадского, д.78, стр. 6, кв. А-160',
    zone: 'Юго-Западный автономный округ',
    region: 'Тропарёво-Никулино'
  },
  {
    id: '3',
    address: 'г. Москва, пр-т. Вернадского, д.78, стр. 6, кв. А-160',
    zone: 'Юго-Западный автономный округ',
    region: 'Тропарёво-Никулино'
  },
]

export const ObjectsRegistry: FC<ObjectsRegistryProps> = (props) => {
  const [container, setContainer] = useState<containerType>('card');

  const options = [
    {
      value: 'card',
      content: '1'
    },
    {
      value: 'list',
      content: '2'
    }
  ];

  const handelContainer = () => {
    setContainer((prev) => prev === 'card' ? 'list' : 'card');  
  }

  return (
    <div className={classNames(cls.registry, {}, [props.className])}>
      <div className={cls.title}>
        <span className={cls.text}>Реестр объектов</span>
        <RadioButton onChange={handelContainer} options={options}/>
      </div>
      <div className={classNames(cls.content, {[cls.card]: container === 'card', [cls.list]: container === 'list'})}>
        {mockData.map((item)=> (
          <CardOfObject key={item.id} data={item} view={container}/>
        ))}
      </div>
    </div>
  );
};
