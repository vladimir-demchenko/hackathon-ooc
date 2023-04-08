import { FC, LinkHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Link.module.scss';

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
} 

export const Link: FC<LinkProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <a className={classNames(cls.link, {}, [className])} {...otherProps}>
            {children}
        </a>
    );
};
