import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup defualt values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        tag: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
    const currentState = {
        text: '',
        tag: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'test';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set tag filter', () => {
    const tag = 'BLUE';
    const action = { type: 'SET_TAG_FILTER', tag };
    const state = filtersReducer(undefined, action);
    expect(state.tag).toBe(tag);
});

test('should set startDate filter', () => {
    const startDate = moment(0);
    const action = { type: 'SET_STARTDATE', startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment(0);
    const action = { type: 'SET_ENDDATE', endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});