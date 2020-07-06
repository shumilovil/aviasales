import React from 'react';
import style from './Filters.module.css'
import { Filter } from './Filter';

export const Filters = (props) => {

    const onFilterChange = (filterName) => {
        props.toggleFilter(filterName);
    }

    const onFilterAllChange = (filterName) => {
        props.toggleFilterAll(filterName);
    }

    return (
        <div className={style.filters}>
            <h1>Количество пересадок</h1>

            <Filter filterLabel={'Все'}
                onFilterChange={onFilterAllChange}
                filter={props.filterAll}
                filterName={'all'}
            />

            <Filter filterLabel={'Без пересадок'}
                onFilterChange={onFilterChange}
                filter={props.filters.zeroConnections}
                filterName={'zeroConnections'}
            />

            <Filter filterLabel={'1 пересадка'}
                onFilterChange={onFilterChange}
                filter={props.filters.oneConnection}
                filterName={'oneConnection'}
            />

            <Filter filterLabel={'2 пересадки'}
                onFilterChange={onFilterChange}
                filter={props.filters.twoConnections}
                filterName={'twoConnections'}
            />

            <Filter filterLabel={'3 пересадки'}
                onFilterChange={onFilterChange}
                filter={props.filters.threeConnections}
                filterName={'threeConnections'}
            />

        </div>
    )
}