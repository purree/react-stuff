import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to db and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'hellos',
        amount: 30489,
        note: 'note',
        createdAt: 349857
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions =  store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense to db and store', () => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        createdAt: 0,
        amount: 0,
        note: ''
    };
    store.dispatch(startAddExpense()).then(() => {
        const actions =  store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

// test('should create a add expense action object without values', () => {
//     const expenseData = {

//     }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: ''
//         }
//     });
// });