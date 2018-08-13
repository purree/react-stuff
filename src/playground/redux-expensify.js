import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.updates };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'

});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate) => ({
    type: 'SET_STARTDATE',
    startDate
});
const setEndDate = (endDate) => ({
    type: 'SET_ENDDATE',
    endDate
});

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state, sortBy: 'date'
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

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'rent', amount: 5670, createdAt: 200 }));
store.dispatch(addExpense({ description: 'car', amount: 500, createdAt: 500 }));
store.dispatch(addExpense({ description: 'cat', amount: 1000, createdAt: 7899 }));
store.dispatch(addExpense({ description: 'drinks', amount: 50000, createdAt: 4500 }));
store.dispatch(addExpense({ description: 'food', amount: 670, createdAt: 1200 }));
store.dispatch(addExpense({ description: 'kids', amount: 10000000, createdAt: 10 }));
store.dispatch(sortByDate());

const demoState = {
    expenses: [{
        id: '.asdkjfh',
        description: 'Rent',
        note: 'Final payment of the rent!',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
};