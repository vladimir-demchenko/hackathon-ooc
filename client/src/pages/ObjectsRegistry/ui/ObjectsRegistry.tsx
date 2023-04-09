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
        <CardOfObject view={container}/>
        <CardOfObject view={container}/>
        <CardOfObject view={container}/>
      </div>
    </div>
  );
};
