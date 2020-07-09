export const toogleSingleConnectionFilter = (state, action, direction) => {
    if (state[direction].connections[action.filter]) {
        return {
            ...state,
            [direction]: {
                ...state[direction],
                connections: {
                    ...state[direction].connections,
                    [action.filter]: !state[direction].connections[action.filter]
                },
                allConnections: false
            }
        }
    }

    if (!state[direction].connections[action.filter]) {
        const copyOtherFilters = { ...state[direction].connections };
        delete copyOtherFilters[action.filter] // deletes current filter from copy
        const areAllOtherFiltersChecked = Object.values(copyOtherFilters).every(filter => filter === true)
        return {
            ...state,
            [direction]: {
                ...state[direction],
                connections: {
                    ...state[direction].connections,
                    [action.filter]: !state[direction].connections[action.filter]
                },
                allConnections: areAllOtherFiltersChecked ? true : false
            }
        }
    }
}

export const toogleAllConnectionFilter = (state, direction) => {
    if (state[direction].allConnections) {
        const copyFiltersAndReset = { ...state[direction].connections }
        for (let key in copyFiltersAndReset) {
            copyFiltersAndReset[key] = false;
        }
        return {
            ...state,
            [direction]: {
                ...state[direction],
                connections: {
                    ...copyFiltersAndReset
                },
                allConnections: !state[direction].allConnections
            }
        }
    }

    if (!state[direction].allConnections) {
        const copyFiltersAndReset = { ...state[direction].connections }
        for (let key in copyFiltersAndReset) {
            copyFiltersAndReset[key] = true;
        }
        return {
            ...state,
            [direction]: {
                ...state[direction],
                connections: {
                    ...copyFiltersAndReset
                },
                allConnections: !state[direction].allConnections
            }
        }
    }
}

export const changeDuration = (state, action, direction) => {
    return {
        ...state,
        [direction]: {
            ...state[direction],
            durationRange: {
                min: action.duration.min,
                max: action.duration.max

            }
        }
    }
}