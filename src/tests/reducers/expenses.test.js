import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove any expenses', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: ''
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add a new expense', () => {
    const expense = {
        id: '3',
        description: '',
        note: '',
        amount: 0,
        createdAt: moment()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit a expense', () => {
    const amount = 5000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit a expense (non valid id)', () => {
    const amount = 5000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '45',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});