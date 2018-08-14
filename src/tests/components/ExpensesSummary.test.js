import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expenses summary', () => {
    const expensesCount = 2;
    const expensesTotal = '$56.99';
    const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotal={expensesTotal} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary 2', () => {
    const expensesCount = 1;
    const expensesTotal = '$56.99';
    const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotal={expensesTotal} />)
    expect(wrapper).toMatchSnapshot();
});