import { FC } from 'react';
import cls from './OjectsRegistry.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ObjectsRegistryProps {
    className?: string;
}

export const ObjectsRegistry: FC<ObjectsRegistryProps> = (props) => {
  return (
    <div className={classNames(cls.registry, {}, [props.className])}>
        Objects registry
    </div>
  );
};
