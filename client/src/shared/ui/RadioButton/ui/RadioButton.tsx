import { FC } from 'react';
import {RadioButton as Radio} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import cls from './RadioButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface RadioButtonProps {
    className?: string;
}

export const RadioButton: FC<RadioButtonProps> = (props) => {
    const options = [
        {
            value: 'value 1',
            content: 'value 1'   
        },
        {
            value: 'value 2',
            content: 'value 2'
        }
    ]
    
    return (
        <Radio size='m' options={options} className={classNames(cls.radioBtn, {}, [props.className])}></Radio>
    );
};