export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const setTagFilter = (tag = 'BLUE') => ({
    type: 'SET_TAG_FILTER',
    tag
});

export const setStartDate = (startDate) => ({
    type: 'SET_STARTDATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_ENDDATE',
    endDate
});

export const clearFilters = () => ({
    type: 'CLEAR_FILTERS'
});