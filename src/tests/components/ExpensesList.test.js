import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList', () => {
    const wrapper = shallow(<ExpensesList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render a empty ExpenseList', () => {
    const wrapper = shallow(<ExpensesList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
});