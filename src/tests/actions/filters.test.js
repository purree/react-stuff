import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
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

test('should generate a set text action object with default (empty string) ', () => {
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