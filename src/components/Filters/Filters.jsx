import React from 'react';
import style from './Filters.module.css'
import { Filter } from './Filter';
import RangeSlider from './RangeSlider/RangeSlider';
import { ThemeProvider } from '@material-ui/core';
import theme from './RangeSlider/theme';
import { Preloader } from '../../common/Preloader/Preloader';

export const Filters = (props) => {

    const onFilterChangeThere = (filterName) => {
        props.toggleFilterThere(filterName);
    }

    const onallConnectionsChangeThere = (filterName) => {
        props.toggleallConnectionsThere(filterName);
    }

    const onFilterChangeFrom = (filterName) => {
        props.toggleFilterFrom(filterName);
    }

    const onallConnectionsChangeFrom = (filterName) => {
        props.toggleallConnectionsFrom(filterName);
    }



    return (
        <div>
            <div className={style.filters}>
                <div className={style.there}>
                    <h1>Туда</h1>

                    <Filter filterLabel={'Все пересадки'}
                        onFilterChange={onallConnectionsChangeThere}
                        filter={props.filtersThere.allConnections}
                        filterName={'all'}
                    />

                    <Filter filterLabel={'Без пересадок'}
                        onFilterChange={onFilterChangeThere}
                        filter={props.filtersThere.connections.zeroConnections}
                        filterName={'zeroConnections'}
                    />

                    <Filter filterLabel={'1 пересадка'}
                        onFilterChange={onFilterChangeThere}
                        filter={props.filtersThere.connections.oneConnection}
                        filterName={'oneConnection'}
                    />

                    <Filter filterLabel={'2 пересадки'}
                        onFilterChange={onFilterChangeThere}
                        filter={props.filtersThere.connections.twoConnections}
                        filterName={'twoConnections'}
                    />

                    <Filter filterLabel={'3 пересадки'}
                        onFilterChange={onFilterChangeThere}
                        filter={props.filtersThere.connections.threeConnections}
                        filterName={'threeConnections'}
                    />

                    {
                        props.isLoading ? <Preloader />
                            : <ThemeProvider theme={theme}>
                                <RangeSlider setDuration={props.setDurationThere}
                                    minMaxDuration={props.minMaxDurationThere} />
                            </ThemeProvider>
                    }


                </div>

                <div className={style.from}>
                    <h1>Обратно</h1>

                    <Filter filterLabel={'Все пересадки'}
                        onFilterChange={onallConnectionsChangeFrom}
                        filter={props.filtersFrom.allConnections}
                        filterName={'all'}
                    />

                    <Filter filterLabel={'Без пересадок'}
                        onFilterChange={onFilterChangeFrom}
                        filter={props.filtersFrom.connections.zeroConnections}
                        filterName={'zeroConnections'}
                    />

                    <Filter filterLabel={'1 пересадка'}
                        onFilterChange={onFilterChangeFrom}
                        filter={props.filtersFrom.connections.oneConnection}
                        filterName={'oneConnection'}
                    />

                    <Filter filterLabel={'2 пересадки'}
                        onFilterChange={onFilterChangeFrom}
                        filter={props.filtersFrom.connections.twoConnections}
                        filterName={'twoConnections'}
                    />

                    <Filter filterLabel={'3 пересадки'}
                        onFilterChange={onFilterChangeFrom}
                        filter={props.filtersFrom.connections.threeConnections}
                        filterName={'threeConnections'}
                    />
                    
                    {
                        props.isLoading ? <Preloader />
                            : <ThemeProvider theme={theme}>
                                <RangeSlider setDuration={props.setDurationFrom}
                                    minMaxDuration={props.minMaxDurationFrom} />
                            </ThemeProvider>
                    }

                </div>
            </div>
        </div>
    )
}