import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startRemoveExpense, startEditExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        startRemoveExpense={startRemoveExpense}
        startEditExpense={startEditExpense}
        history={history}
        expense={expenses[1]}
    />);
});

test('should render editExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpensePage submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle editExpensePage delete', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});