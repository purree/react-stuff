import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should create a remove expense action object', () => {
    expect(removeExpense({ id:'apa'})).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'apa'
    });
});

test('should create a edit expense action object', () => {
    const action = editExpense('apa', { note: 'new note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'apa',
        updates: {
            note: 'new note'
        }
    });
});

test('should create a add expense action object with values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 10009,
        createdAt: 1000,
        note: 'very expencive rent!'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should create a add expense action object without values', () => {
    const expenseData = {

    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});