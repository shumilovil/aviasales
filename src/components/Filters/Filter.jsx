import React from 'react';
import style from './Filters.module.css'
import checkboxChecked from '../../assets/images/checkbox_checked.svg'
import checkboxEmpty from '../../assets/images/checkbox_empty.svg'

export const Filter = (props) => {

    return (
        <div className={style.connections} onClick={() => { props.onFilterChange(props.filterName) }} >
            <div className={style.checkbox}>
                <img src={props.filter ? checkboxChecked : checkboxEmpty} alt='' />
            </div>
            <span>{props.filterLabel}</span>
        </div>
    )
}