import { FC } from 'react';
import cls from './SearchInput.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Filter from 'shared/assets/icons/filtger.svg';
import SearchIcon from 'shared/assets/icons/search.svg';

interface SearchInputProps {
    className?: string;
}

export const SearchInput: FC<SearchInputProps> = (props) => {

    return (
        <div className={cls.searchWrapper}>
            <SearchIcon className={cls.searchIcon}/>
            <input type='text' placeholder='Поиск' className={classNames(cls.searchInput, {}, [])}/>
            <button className={cls.searchFilter}><Filter/></button>
        </div>
    );
};  