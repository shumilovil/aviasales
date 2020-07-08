import React from 'react';
import style from './Filters.module.css'
import { Filter } from './Filter';
import RangeSlider from './RangeSlider/RangeSlider';
import { ThemeProvider } from '@material-ui/core';
import theme from './RangeSlider/theme';

export const Filters = (props) => {

    const onFilterChange = (filterName) => {
        props.toggleFilter(filterName);
    }

    const onallConnectionsChange = (filterName) => {
        props.toggleallConnections(filterName);
    }

    return (
        <div>
            <div className={style.filters}>
                <h1>Туда</h1>

                <Filter filterLabel={'Все пересадки'}
                    onFilterChange={onallConnectionsChange}
                    filter={props.filtersThere.allConnections}
                    filterName={'all'}
                />

                <Filter filterLabel={'Без пересадок'}
                    onFilterChange={onFilterChange}
                    filter={props.filtersThere.connections.zeroConnections}
                    filterName={'zeroConnections'}
                />

                <Filter filterLabel={'1 пересадка'}
                    onFilterChange={onFilterChange}
                    filter={props.filtersThere.connections.oneConnection}
                    filterName={'oneConnection'}
                />

                <Filter filterLabel={'2 пересадки'}
                    onFilterChange={onFilterChange}
                    filter={props.filtersThere.connections.twoConnections}
                    filterName={'twoConnections'}
                />

                <Filter filterLabel={'3 пересадки'}
                    onFilterChange={onFilterChange}
                    filter={props.filtersThere.connections.threeConnections}
                    filterName={'threeConnections'}
                />                

                <ThemeProvider theme={theme}>
                    <RangeSlider chooseDuration={props.chooseDuration}/>
                </ThemeProvider>

            </div>
        </div>
    )
}