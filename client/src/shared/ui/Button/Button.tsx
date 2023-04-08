import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    
    return (
        <button className={classNames(cls.button, {}, [className])} {...otherProps}>
            {children}
        </button>
    );
};
