import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    tag: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state, sortBy: 'date'
            };
        case 'SET_TAG_FILTER':
            return {
                ...state, tag: action.tag
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state, sortBy: 'amount'
            };
        case 'SET_STARTDATE':
            return {
                ...state, startDate: action.startDate
            };
        case 'SET_ENDDATE':
            return {
                ...state, endDate: action.endDate
            };
        default:
            return state;
    }
};
