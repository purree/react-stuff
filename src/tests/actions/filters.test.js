import { setTextFilter, setTagFilter, sortByDate, sortByAmount, setStartDate, setEndDate, clearFilters } from '../../actions/filters';
import moment from 'moment';

test('should generate a set start date action object', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_STARTDATE',
        startDate: moment(0)
    });
});

test('should generate a set end date action object', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_ENDDATE',
        endDate: moment(0)
    });
});

test('should generate a set tag action object with default (empty string) ', () => {
    expect(setTagFilter()).toEqual({
        type: 'SET_TAG_FILTER',
        tag: 'BLUE'
    });
});

test('should generate a set tag action object with the set tag', () => {
    const tag = 'GREEN'
    expect(setTagFilter(tag)).toEqual({
        type: 'SET_TAG_FILTER',
        tag
    });
});

test('should generate a set tag action object with default (empty string) ', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate a set text action object with the set text', () => {
    const text = 'test text;'
    expect(setTextFilter(text)).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate a sortByDate action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate a sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate a clear filters action object', () => {
    expect(clearFilters()).toEqual({
        type: 'CLEAR_FILTERS'
    });
});